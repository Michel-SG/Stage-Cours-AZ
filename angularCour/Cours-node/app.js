// const http = require('http');
// const server = http.createServer((req, res)=>{
//     res.write('Hello world');
//     res.end();
// });
// server.listen(3000, ()=>{
//     console.log('Adresse du server : http://localhost:3000');
// });

// const express = require('express');
// const app = express();


const express = require('express');
const app = express();
const personne = require('./routes/personne.route');
const adresse = require('./routes/adresse.route');
const connexion = require('./routes/connexion.route');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept,Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
app.use(express.json());
// PUT localhost:3000/personne/2

app.use('/connexion', connexion);
app.use('/personne', personne);
app.use('/adresse', adresse);
app.all('/*', (req, res) => {
    res
        .status(404)
        .send('Not Found');
});
app.listen(3000, () => console.log('Adresse du serveur : http://localhost:3000')
);

// const middleware = (req, res, next) => {
//     console.log('middleware', req.url);
//     next();
// }


// app.get('/hello', (req, res) => {
//     res
//         .type('html')
//         .sendFile(__dirname + '/index.html');
// });


// app.get('/hello/:nom?/:prenom?', (req, res) => {
//     res
//         .type('json')
//         .json({ nom: req.params.prenom, prenom: req.params.nom });
// });

// app.get('/hello/:nom?/:prenom?', (req, res) => {
//     res
//     .type('html')
//     .send(`Bonjour ${req.params.prenom} ${req.params.nom}`);
//     });

// app.get('/calcul/:op?', (req, res) => {
//     const getOperator = (op) => {
//         if (op == "plus") {
//             return "+";
//         } else if (op == "moins") {
//             return "-";
//         } else if (op == "fois") {
//             return "*";
//         } else {
//             return "/";
//         }
//     }
//     const operateur = getOperator(req.params.op);
//     res.send(`${req.query['var1']} ${operateur} ${req.query['var2']} =` + eval(req.query['var1'] + operateur + req.query['var2']));
// });

// app.get('/calcul/:op', (req, res) => {
//     const op = req.params.op;
//     const { var1, var2 } = req.query;
//     let operator = '';
//     if (op === 'plus') {
//         operator = '+';
//     } else if (op === 'moins') {
//         operator = '-';
//     } else if (op === 'fois') {
//         operator = '*';
//     } else if (op === 'div') {
//         operator = '/';
//     } else {
//         operator= "opérateur inconnu"
//     }
//     res.send(operator.length === 1 ? `${var1} ${operator} ${var2} = ${eval(var1 + operator + var2)}` : operator);
// });

// app.get('/hello/:nom?/:prenom?', (req, res) => {
//     res.send(`Bonjour ${req.params.prenom ?? 'john'} ${req.params.nom ?? 'doe'}`);
// });
// app.get('/hello', (req, res) => {
//     res.send(`Bonjour ${req.query['prenom']} ${req.query['nom']}`);
//     });
// app.get('/', (req, res) => {
//     console.log('get method')
//     res.send('Get:/');
// });
// app.get('/home', (req, res) => {
//     console.log('get method')
//     res.send('Get:/home');
// });
// app.post('/home', (req, res) => {
//     console.log('get method')
//     res.send('post:/home');
// });
// app.all('/all', (req, res) => {
//     console.log('get method')
//     res.send('All:/' + req.method);
// });

// app.all('/ab?cd', (req, res) => {
//     console.log('get method')
//     res.send(req.url);
// });

// app.get('/*', (req, res) => {
//     console.log('get method')
//     res.status(404).send('Not Found');
// });

// app.use(middleware);
// app.listen(3000, () => console.log('Adresse du server : http://localhost:3000')
// )




//Le système de gestion de module par défaut est : CommonJs

// const f = require('./fonctions');

// console.log(f.somme(2,5));

// const { somme, produit } = require('./fonctions.mjs');
// import { somme, produit } from "./fonctions.mjs";

// console.log(somme(2,5));
// console.log(produit(2,5));
// const division = (a, b) => {
//     if (b === 0) {
//         throw "Problème de division par zéro";
//     }
//     return a / b;
// }
// try{
//     console.log(division(10, 2));
//     console.log(division(10, 0));
// }catch(e){
//     console.log(e);
// }

// const division = (a, b, callback) => {
//     if (b !== 0) {
//         return callback(null, a / b);
//     }
//     return callback('Problème de division par zéro', null);
// };
// const a = 10, b = 2;
// // appel de la fonction division avec callback
// division(a, b, (err, result) => {
//     if (err) {
//         console.error("erreur : " + err);
//     } else {
//         console.log(`${a} / ${b} = ${result}`);
//     }
// });

// const tab = [2, 3, 5, 8, 4];
// const valeur = 4;

// const searchElement = (elt, tab, callback) => {

//    if(tab.includes(elt)){
//        return callback(null, `${elt} est trouvé dans ${tab}`)
//    }
//    return callback(`${elt} n'est pas dans ${tab}`, null)
// }
// searchElement(4,[2, 3, 5, 8, 4], (err, result) => {
//     if (err) {
//         console.error("erreur : " + err);
//     } else {
//         console.log(result);
//     }
// });

// const personnes=[
//     {nom:"wick", prenom:"john", age:45},
//     {nom: "maggio", prenom:"carol", age: 25},
//     {nom: "dalton", prenom:"jack", age: 30}

// ]
// const personne = {nom:"wick", prenom:"john", age:45};

// const searchPersonne = (elt, tab, callback) => {
    // tab.find(item=>item.nom === elt.nom && item.prenom === elt.prenom) !==undefined //return un tableau d'objet
    // tab.some(item=>item.nom === elt.nom && item.prenom === elt.prenom) return un boolean à partir du premier résultat
    // tab.filter(item=>item.nom === elt.nom && item.prenom === elt.prenom) return un élément

//      const per = tab.find((p)=>p===elt);
//     if(tab.find(item=>item.nom === elt.nom && item.prenom === elt.prenom) !==undefined){
//         return callback(null, `${elt.prenom} est trouvé dans le tableau`)
//     }
//     return callback(`${elt.prenom} n'est pas dans le tableau`, null)
//  }
//  searchPersonne(personne,personnes, (err, result) => {
//      if (err) {
//          console.error("erreur : " + err);
//      } else {
//          console.log(result);
//      }
//  });







