import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
 nom:any;
 prenom:any;
  param1 = 'john';
  param2 = 'wick';
  
  constructor(private route:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>{
      this.nom =res.get('nom');
      this.prenom=res.get('prenom');
    });
    // this.nom = this.route.snapshot.params['nom'];
    // this.prenom = this.route.snapshot.params['prenom'];
  }

}
