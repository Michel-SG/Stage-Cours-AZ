const adresse = require("../models/adresse");
const adresseDao = require('../dao/adresse.dao');
const personneAdresseDao = require('../dao/personne-adresse.dao');

exports.getAll = (req, res, next) => {
    adresseDao.getAll()
        .then(result => res.status(200).json(result))
        .catch(err => {
            return res.status(500).json({
                error: `problème de récupération de donnees: ${err}`
            })
        });
}

exports.getOneById = (req, res, next) => {
    const id = parseInt(req.params.id);
    adresseDao.getOneById(id)
        .then(result => res.status(200).json(result[0]))
        .catch(err => {
            return res.status(404).json({
                error: `adresse avec l'identifiant ${id} non trouvée`
            });
        });
}

exports.add = (req, res, next) => {
    const a = new adresse.Adresse(
        req.body.id,
        req.body.rue,
        req.body.ville,
        req.body.codePostal
    );
    adresseDao.add(a)
        .then(result => {
            a.id = result.insertId;
            return res.status(201).json(a);
        })
        .catch(err => {
            return res.status(500).json({
                error: `problème d'insertion : ${err}`
            });
        });
}

exports.edit = (req, res, next) => {
    const id = parseInt(req.params.id);
    const a = new adresse.Adresse(
        req.body.id,
        req.body.rue,
        req.body.ville,
        req.body.codePostal
    );
    adresseDao.edit(id, a)
        .then(result => {
            return res.status(200).json({
                message: `adresse avec l'identifiant ${id}
modifiée avec succès`
            });
        })
        .catch(err => {
            if (!err) {
                return res.status(404).json({
                    error: `Aucune adresse avec l'identifiant ${id}`
                });
            }
            return res.status(500).json({
                error: `problème de mise à jour : ${err}`
            });
        });
}
//suppression d'adresse avec ses occurances
exports.delete = async (req, res, next) => {
    const id = parseInt(req.params.id);
    await personneAdresseDao.deleteByIdAdresse(id)
        .catch(err => {
            return res.status(500).json({
                error: `problème de suppression d'adresse : ${err}`
            });
        });
    await adresseDao.delete(id)
        .then(result => {
            return res.status(200).json({
                message: `adresse avec l'identifiant ${id} supprimée avec succès`
            });
        })
        .catch(err => {
            if (!err) {
                return res.status(404).json({
                    error: `Aucune adresse avec l'identifiant ${id}`
                });
            }
            return res.status(500).json({
                error: `problème de suppression d'adresse : ${err}`
            });
        });
}

// Autre solution de delete avec ses occurences

// exports.delete = (req, res, next) => {
//     const id = parseInt(req.params.id);
//     personneAdresseDao.deleteByIdAdresse(id)
//         .then((result) => {
//             adresseDao.delete(id)
//                 .then(result => {
//                     return res.status(200).json({
//                         message: `adresse avec l'identifiant ${id} supprimée avec succès`
//                     });
//                 })
//                 .catch(err => {
//                     if (!err) {
//                         return res.status(404).json({
//                             error: `Aucune adresse avec l'identifiant ${id}`
//                         });
//                     }
//                     return res.status(500).json({
//                         error: `problème de suppression : ${err}`
//                     });
//                 });
//         })
//         .catch(err => {
//             return res.status(500).json({
//                 error: `problème de suppression dans personne_adresse : ${err}`
//             });
//         })
// }



// exports.delete = (req, res, next) => {
//     const id = parseInt(req.params.id);
//     adresseDao.delete(id)
//         .then(result => {
//             return res.status(200).json({
//                 message: `adresse avec l'identifiant ${id} supprimée avec succès`
//             });
//         })
//         .catch(err => {
//             if (!err) {
//                 return res.status(404).json({
//                     error: `Aucune adresse avec l'identifiant ${id}`
//                 });
//             }
//             return res.status(500).json({
//                 error: `problème de suppression : ${err}`
//             });
//         });
// }


// exports.delete = (req, res, next) => {
//     const id = parseInt(req.params.id);
//     adresseDao.delete(id)
//         .then(result => {
//             return res.status(200).json({
//                 message: `adresse avec l'identifiant ${id} supprimée avec succès`
//             });
//         })
//         .catch(err => {
//             return res.status(500).json({
//                 error: `adresse de suppression : ${err}`
//             });
//         });
// }