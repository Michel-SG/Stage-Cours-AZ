import { Component, OnInit } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  valeur1 = null;
  valeur2 = null;
  op = '+';
  result = 0;
  personne: Personne = {};
  personnes: Array<Personne> = [];
  constructor() { }

  ngOnInit(): void {
  }
  calculer() {
    this.result = eval(this.valeur1 + this.op + this.valeur2);
    this.valeur1 = null;
    this.valeur2 = null;
  }

  ajouterPersonne() {
    this.personnes.push({ ...this.personne });
    this.personne.nom = '';
    this.personne.prenom = '';
  }

}
