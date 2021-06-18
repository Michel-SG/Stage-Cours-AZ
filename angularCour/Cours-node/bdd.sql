CREATE DATABASE cours_expressjs;
USE cours_expressjs;
CREATE TABLE personne (
num INT PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(20),
prenom VARCHAR(20)
);
CREATE TABLE adresse (
id INT PRIMARY KEY AUTO_INCREMENT,
rue VARCHAR(20),
ville VARCHAR(20),
codePostal VARCHAR(20)
);
CREATE TABLE personne_adresse (
id INT PRIMARY KEY AUTO_INCREMENT,
num_personne INT,
id_adresse INT,
CONSTRAINT fk_personne FOREIGN KEY (num_personne) REFERENCES personne(num),
CONSTRAINT fk_adresse FOREIGN KEY (id_adresse) REFERENCES adresse(id)
);
INSERT INTO personne (nom, prenom) VALUES
('Cohen', 'Sophie'),
('Dalton', 'Jack'),
('Wick', 'John');
INSERT INTO adresse (rue, ville, codePostal) VALUES
('Paradis', 'Marseille', '13006'),
('Victoire', 'Paris', '75014'),
('Villeurbanne', 'Lyon', '69000');
INSERT INTO personne_adresse (num_personne, id_adresse) VALUES
(1, 1),
(1, 2),
(2, 2);