import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs/operators';
import { Livre } from '../interfaces/livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  livres: Array<Livre> = [
    {
      isbn: "100",
      titre: "java",
      nbrPage: 100,
      auteurs: [{ nom: "tom", prenom: "tim", id: 1 }],
      motsCles: ["objet", "class"]
    },
    {
      isbn: "200",
      titre: "html",
      nbrPage: 200,
      auteurs: [{ nom: "tom", prenom: "tim", id: 1 }, { nom: "ryan", prenom: "bills", id: 2 }],
      motsCles: ["balise"],
    }
  ];
  constructor() { }
  getAllLivre() {
    return this.livres
  }
  creatOneLivre(livre: Livre) {
    this.livres.push(livre);
  }
  updateLivre(livr: Livre) {
    let uniqueBook = this.livres.find(book => book.isbn === livr.isbn);
    this.livres[this.livres.indexOf(uniqueBook)] = livr;
  }
  getLivreById(id: string) {
    return this.livres.find((elt) => elt.isbn === id);
  }
  editLivre(l: Livre) {
    let livre: Livre = this.livres.find((elt) => elt.isbn === l.isbn);
    this.livres[this.livres.indexOf(livre)] = l;
  }
  deleteLivre(id: string) {
    let oneLivre: Livre = this.livres.find(elt => elt.isbn === id)
    this.livres.splice(this.livres.indexOf(oneLivre), 1);
  }

}
