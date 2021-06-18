import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';



@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  //nom = "wick";
  personnes:Array<Personne>=[];
  personne: Personne = { };
  constructor() { }

  ngOnInit(): void {
  }
  afficherTout() {
    console.log(this.personne);
  }
  ajouterPersonne() {
    this.personnes.push(this.personne);
    this.personne={};
  }
}
