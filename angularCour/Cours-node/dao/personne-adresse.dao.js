const connection = require('../database.js');

// exports.getAllAdressesOfPersonne = (idPersonne) => {
//     return new Promise((resolve, reject) => {
//         const req = connection.query("SELECT * FROM adresse a WHERE a.id IS NOT NULL AND a.id IN (SELECT id_adresse FROM personne_adresse WHERE num_personne= ?)", idPersonne, (err, result) => {
//             console.log(req.sql)
//             err ? reject(err) : resolve(result);
//         });
//     });
// };
// exports.getAllAdressesOfPersonne = (idPersonne) => {
//     return new Promise((resolve, reject) => {
//         const req = connection.query("SELECT * FROM adresse INNER JOIN personne_adresse ON adresse.id = personne_adresse.id_adresse WHERE num_personne = ?", idPersonne, (err, result) => {
//             console.log(req.sql)
//             err ? reject(err) : resolve(result);
//         });
//     });
// };


exports.getAllAdressesOfPersonne = (idPersonne) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT a.id, rue, codePostal, ville FROM adresse a JOIN personne_adresse pa ON pa.id_adresse = a.id  WHERE num_personne = ? ", idPersonne, (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};

exports.getOneAdresseOfPersonne = (idPersonne, idAdresse) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT a.id, rue, codePostal, ville FROM adresse a JOIN personne_adresse pa ON pa.id_adresse = a.id  WHERE num_personne = ? AND id_adresse = ?", [idPersonne, idAdresse], (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
}
exports.add =(idPersonne, idAdresse)=>{
    return new Promise((resolve, reject)=>{
        const req= connection.query("INSERT INTO personne_adresse SET num_personne = ?, id_adresse = ?",
        [idPersonne, idAdresse], (err, result)=>{
            console.log(req.sql);
            err ? reject(err) : resolve(result);
        })
    })
}

exports.editPersonne = (id, pId) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("UPDATE personne_adresse SET num_personne =? WHERE num_personne = ?", [pId, id], (err,
            result) => {
            console.log(req.sql)
            err || result.affectedRows == 0  ? reject(err) : resolve(result);
        });
    });
};
exports.deleteByIdPersonne = (idPersonne) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("DELETE FROM personne_adresse WHERE num_personne = ?", idPersonne, (err, result) => {
            console.log(req.sql)
            err  ? reject(err) : resolve(result);
        });
    });
};
exports.deleteByIdAdresse = (idAdresse) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("DELETE FROM personne_adresse WHERE id_adresse = ?", idAdresse, (err, result) => {
            console.log(req.sql)
            err  ? reject(err) : resolve(result);
        });
    });
};



