import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.css']
})
export class ObjetComponent implements OnInit {
perso = {nom: 'Wick', prenom:'John', age:45};
attribut='';
valeur:any;
next='';
previous:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => {
      this.attribut = response.get('attribut');
      if (this.attribut == "nom") {
        this.next = "prenom";
      } else if (this.attribut == "prenom") {
        this.next = "age";
      } else {
        this.next = "nom";
      }

    });
    // this.afficher(this.attribut);
  }

  // afficher(attribut:string){
  //  if(attribut=='nom'){
  //   this.valeur=this.perso.nom;
  //  }else if(attribut=='prenom'){
  //   this.valeur=this.perso.prenom;
  //  }else if(attribut=='age'){
  //   this.valeur=this.perso.age;
  //  }

  // }

}
