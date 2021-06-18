import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
  nom='';
  prenom='';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((response)=>{
    //   this.nom=response.get('nom');
    //   this.prenom = response.get('prenom');
    // })
    this.nom = this.route.snapshot.params.nom;
    this.prenom = this.route.snapshot.params.prenom;
  }

}
