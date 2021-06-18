const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cours_expressjs'
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connexion etablie avec la base de données");
});

module.exports = connection;