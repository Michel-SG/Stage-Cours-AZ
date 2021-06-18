import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {
  rue = '';
  codePostal = '';
  ville = '';
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((res)=>{
      this.rue = res.get('rue');
      this.codePostal = res.get('codePostal');
      this.ville = res.get('ville');
    })

    // this.rue = this.route.snapshot.queryParams.rue;
    // this.ville = this.route.snapshot.queryParams.ville;
    // this.codePostal = this.route.snapshot.queryParams.codePostal;
  }
  direQuelqueChose() {
    console.log("bonjour");
  }
  afficherComposantStagiaire() {
    // this.router.navigateByUrl("/stagiaire/mitroglou/kostas");
    this.router.navigate(["/stagiaire", "mitroglou", "kostas"]);
  }

}
