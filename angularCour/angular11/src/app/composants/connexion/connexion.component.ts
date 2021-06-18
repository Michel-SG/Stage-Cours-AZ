import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  personne: Personne = {};
  erreur = "";
  constructor(private auth: AuthentificationService,
      private router: Router) { }

  ngOnInit(): void {
  }

  connexion() {
    this.auth.checkData(this.personne).subscribe(
      res => {
        if (res) {
          localStorage.setItem('user', JSON.stringify(res))
          this.router.navigateByUrl('/home');
        } else {
          this.erreur = "Identifiants incorrects";
        }
      }
    )
  }
}
