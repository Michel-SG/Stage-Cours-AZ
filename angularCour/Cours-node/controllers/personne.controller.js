const personne = require("../models/personne");
const personneDao = require('../dao/personne.dao');
const adresseDao = require('../dao/adresse.dao');
const personneAdresseDao = require('../dao/personne-adresse.dao');
exports.getAll = async (req, res, next) => {
    let personnes = await personneDao.getAll().catch(err => {
        return res.status(500).json({
            error: `problème de récupération de personnes: ${err}`
        })
    });
   
    for (let p of personnes) {
        p.adresses = await personneAdresseDao.getAllAdressesOfPersonne(p.num)
            .catch(err => {
                res.status(500).json({
                    error: `problème de récupération d'adresses : ${err}`
                });
            });
        console.log(p.adresses);
    }
    res.status(200).json(personnes);
}

exports.getOneById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    let personnes = await personneDao.getOneById(id).catch(err => {
        return res.status(500).json({
            error: `Aucune personne avec l'identifiant ${id}`
        })
    });
    let p = personnes[0];
    p.adresses = await personneAdresseDao.getAllAdressesOfPersonne(p.num)
        .catch(err => {
            res.status(500).json({
                error: `problème de récupération d'adresses : ${err}`
            });
        });

    res.status(200).json(p);
}

exports.getAdressesByIdPersonne = async (req, res, next) => {
    const id = parseInt(req.params.idPersonne);
    await personneAdresseDao.getAllAdressesOfPersonne(id)
        .then((response) => res.status(200).json(response))
        .catch(err => {
            return res.status(404).json({
                error: `Aucune personne avec ${idPersonne}`
            });
        });

}

exports.getAdresseByIdPersonne = async (req, res, next) => {
    const idPersonne = parseInt(req.params.idPersonne);
    const idAdresse = parseInt(req.params.idAdresse);
    await personneAdresseDao.getOneAdresseOfPersonne(idPersonne, idAdresse)
        .then(a => res.status(200).json(a[0]))
        .catch(err => {
            return res.status(404).json({
                error: `Aucune personne ${idPersonne} et pas d'adresse ${idAdresse}`
            });
        });
}

exports.add = async (req, res, next) => {
    const p = new personne.Personne(
        req.body.num,
        req.body.nom,
        req.body.prenom,
        req.body.adresses
    );
    let result = await personneDao.add(p).catch(err => {
        return res.status(500).json({
            error: `problème d'insertion dans personne: ${err}`
        });
    });
    p.num = result.insertId;
    for (let adresse of p.adresses) {
        if (!adresse.id) {
            let res = await adresseDao.add(adresse).catch(err => {
                return res.status(500).json({
                    error: `problème d'insertion dans adresse: ${err}`
                });
            });
            adresse.id = res.insertId;
        }
        await personneAdresseDao.add(p.num, adresse.id).catch(err => {
            return res.status(500).json({
                error: `problème d'insertion dans  personne_adresse : ${err}`
            });
        });
        
    }
    return res.status(201).json(p);
}

exports.edit = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const p = new personne.Personne(
        req.body.num,
        req.body.nom,
        req.body.prenom,
        req.body.adresses
    );
    await personneDao.edit(id, p)
    .then(async (result) => {
        await personneAdresseDao.deleteByIdPersonne(id)
            .catch(err => {
                return res.status(500).json({
                    error: `problème de suppression d'adresse : ${err}`
                });
            });
        for (let adresse of p.adresses) {
            if (!adresse.id) {
                let res = await adresseDao.add(adresse).catch(err => {
                    return res.status(500).json({
                        error: `problème d'insertion dans adresse: ${err}`
                    });
                });
                adresse.id = res.insertId;
            }
            await personneAdresseDao.add(p.num, adresse.id).catch(err => {
                return res.status(500).json({
                    error: `problème d'insertion dans  personne_adresse : ${err}`
                });
            });

        }
        return res.status(202).json(p);
    })
        .catch(err => {
            if (!err) {
                return res.status(404).json({
                    error: `Aucune personne avec l'identifiant ${id}`
                });
            }
            return res.status(500).json({
                error: `problème de modification de personne : ${err}`
            });
        });
    

}

exports.delete = async (req, res, next) => {
    const id = parseInt(req.params.id);
    await personneAdresseDao.deleteByIdPersonne(id)
        .catch(err => {
            return res.status(500).json({
                error: `problème de suppression d'adresse : ${err}`
            });
        });
    await personneDao.delete(id)
        .then(result => {
            return res.status(200).json({
                message: `personne avec l'identifiant ${id} supprimée avec succès`
            });
        })
        .catch(err => {
            if (!err) {
                return res.status(404).json({
                    error: `Aucune personne avec l'identifiant ${id}`
                });
            }
            return res.status(500).json({
                error: `problème de suppression de personne : ${err}`
            });
        });
}

// exports.getAll = (req, res, next) => {
//     personneDao.getAll()
//         .then(result => res.status(200).json(result))
//         .catch(err => {
//             return res.status(500).json({
//                 error: `problème de récupération de donnees: ${err}`
//             })
//         });
// }

// exports.getOneById = (req, res, next) => {
//     const id = parseInt(req.params.id);
//     personneDao.getOneById(id)
//         .then(result => res.status(200).json(result[0]))
//         .catch(err => {
//             return res.status(404).json({
//                 error: `personne avec l'identifiant ${id} non trouvée`
//             });
//         });
// }


// exports.add = (req, res, next) => {
//     const p = new personne.Personne(
//         req.body.num,
//         req.body.nom,
//         req.body.prenom,
//         req.body.adresses
//     );
//     personneDao.add(p)
//         .then(result => {
//             p.num = result.insertId;
//             return res.status(201).json(p);
//         })
//         .catch(err => {
//             return res.status(500).json({
//                 error: `problème d'insertion : ${err}`
//             });
//         });
// }
// exports.edit = (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const p = new personne.Personne(
//         req.body.num,
//         req.body.nom,
//         req.body.prenom
//     );
//     personneDao.edit(id, p)
//         .then(result => {
//             return res.status(200).json({
//                 message: `personne avec l'identifiant ${id}
// modifiée avec succès`
//             });
//         })
//         .catch(err => {
//             if (!err) {
//                 return res.status(404).json({
//                     error: `Aucune personne avec l'identifiant ${id}`
//                 });
//             }
//             return res.status(500).json({
//                 error: `problème de mise à jour : ${err}`
//             });
//         });
// }
// exports.delete = (req, res, next) => {
//     const id = parseInt(req.params.id);
//     personneDao.delete(id)
//         .then(result => {
//             return res.status(200).json({
//                 message: `personne avec l'identifiant ${id} supprimée avec succès`
//             });
//         })
//         .catch(err => {
//             return res.status(500).json({
//                 error: `problème de suppression : ${err}`
//             });
//         });
// }

// exports.getAll = (req, res, next) => {
//     const query = connection.query("SELECT * FROM personne", (err, result) => {
//         console.log(query.sql)
//         if (err) {
//             return res.status(500).json({
//                 erreur: err
//             });
//         }
//         return res.status(200).json(result);
//     });
// }
// exports.getOneById = (req, res, next) => {
//     const id = +req.params.id;
//     const query = connection.query("SELECT * FROM personne WHERE num = ?", id, (err, result) => {
//         console.log(query.sql)
//         if (err) {
//             return res.status(500).json({
//                 erreur: err
//             });
//         } else if (result.length == 0) {
//             return res.status(404).json({
//                 erreur: `Aucune personne avec l'identifiant ${id}`
//             });
//         } else {
//             return res.status(200).json(result[0]);
//         }
//     });
// }

// exports.add = (req, res, next) => {
//     const p = new personne.Personne(
//         req.body.num,
//         req.body.nom,
//         req.body.prenom,
//     )
//     const query = connection.query("INSERT INTO personne SET ?", p, (err, result) => {
//         console.log(query.sql)
//         if (err) {
//             return res.status(500).json({
//                 erreur: err
//             });
//         } else if (result.affectedRows == 0) {
//             return res.status(404).json({
//                 erreur: `Problème d'insertion`
//             });
//         } else {
//             p.num = result.insertId;
//             return res.status(200).json(p);
//         }
//     });
// }
// exports.add = (req, res, next) => {
//     // const person = req.body;
//     // personnes.push(person);
//     // return res.status(201).json({ message: `${person} ajouté avec succès` });
//     const person = new personne.Personne(
//         req.body.num,
//         req.body.nom,
//         req.body.prenom
//     );
//     const query = connection.query("INSERT INTO personne SET ?", [person], (
//         err, result) => {
//         console.log(query.sql);
//         if (err) {
//             console.log("error: ", err);
//             return res.status(500).json({
//                 error: `problème d'insertion`
//             });
//         }
//         else {
//             return res.status(201).json(person);
//         }
//     });
// }


// exports.add = (req, res, next) => {
//     // const person = req.body;
//     // personnes.push(person);
//     // return res.status(201).json({ message: `${person} ajouté avec succès` });
//     const person = new personne.Personne(
//         req.body.num,
//         req.body.nom,
//         req.body.prenom
//     );
//     const query = connection.query("INSERT INTO personne(nom, prenom) VALUES(?,?)", [p.nom, p.prenom], (
//         err, result) => {
//         console.log(query.sql);
//         if (err) {
//             console.log("error: ", err);
//             return res.status(500).json({
//                 error: `problème d'insertion`
//             });
//         }
//         else {
//             p.num = result.insertId;
//             return res.status(201).json(p);
//         }
//     });
// }


// exports.edit = (req, res, next) => {
//     const id = +req.params.id;
//     const p = personnes.find(elt => elt.num === id);
//     if (p) {
//         p.nom = req.body.nom;
//         p.prenom = req.body.prenom;
//         console.log(personnes);
//         return res.status(202).json(p);
//     } else {
//         return res.status(404).json({
//             erreur: `Aucune personne avec l'identifiant ${id}`
//         });
//     }
// }
// exports.delete = (req, res, next) => {
//     const id = +req.params.id;
//     const p = personnes.find(elt => elt.num === id);

//     if (p) {
//         const index = personnes.indexOf(p);
//         personnes.splice(index, 1);
//         return res.status(200).json({ message: `${id} a été supprimé` });
//     } else {
//         return res.status(404).json({
//             erreur: `Aucune personne avec l'identifiant ${id}`
//         });
//     }

// }
// exports.delete = (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const query = connection.query("DELETE FROM personne WHERE num = ?", [id], (err, result) => {
//         console.log(query.sql)
//         if (err) {
//             console.log(err);
//             return res.status(500).json({
//                 error: `Il y a un problème de suppression`
//             });
//         }
//         else {
//             return res.status(200).json({
//                 message: `La personne ${req.params.id} a été supprimée avec succès`
//             });
//         }
//     });
// }


// exports.delete = (req, res, next) => {
//     const id = +req.params.id;

//     const query = connection.query("DELETE FROM personne WHERE num = ?", [id], (err, result) => {
//         console.log(query.sql)
//         if (err) {
//             return res.status(500).json({
//                 erreur: err
//             });
//         } else if (result.affectedRows == 0) {
//             return res.status(404).json({
//                 erreur: `Problème de suppression`
//             });
//         } else {
//             return res.status(200).json({
//                 message: `Personne supprimée avec succès`
//             });
//         }
//     });

// }


// exports.edit = (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const p = new personne.Personne(
//         req.body.num,
//         req.body.nom,
//         req.body.prenom
//     );
//     const query = connection.query("UPDATE personne SET ? WHERE num =?", [p, id], (err, result) => {
//         console.log(query.sql)
//         if (err) {
//             console.log("error: ", err);
//             return res.status(500).json({
//                 error: `problème de mise à jour`
//             });
//         }
//         else {
//             return res.status(200).json({
//                 message: `La personne ${req.params.id} a été modifiée avec succès`
//             });
//         }
//     });
// }


// exports.edit = (req, res, next) => {
//     const id = +req.params.id;
//     const p = new personne.Personne(
//         req.body.num,
//         req.body.nom,
//         req.body.prenom,
//     )
//     const query = connection.query("UPDATE personne SET nom = ?, prenom =? WHERE num = ?", [p.nom, p.prenom, id], (err, result) => {
//         console.log(query.sql)
//         if (err) {
//             return res.status(500).json({
//                 erreur: err
//             });
//         } else if (result.affectedRows == 0) {
//             return res.status(404).json({
//                 erreur: `Problème de modification`
//             });
//         } else {
//             return res.status(200).json(p);
//         }
//     });
// }
