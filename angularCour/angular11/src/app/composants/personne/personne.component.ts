import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personne: Personne = {};
  personnes: Personne[] = [];

  constructor(private personneService: PersonneService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initialize();

  }
  ajouterPersonne() {
    this.personneService.addPersonne(this.personne).subscribe((res)=>{
      this.initialize();
      this.personne={};
    });
    
  }

  initialize() {
    this.personneService.getAllPersonnes().subscribe(
      (res) => {
        this.personnes = res;
      }
    )
  }

  supprimer(id:number){
    this.personneService.suppression(id).subscribe(
      (res)=>{
        this.initialize();
      }
    );
   
  }

}
