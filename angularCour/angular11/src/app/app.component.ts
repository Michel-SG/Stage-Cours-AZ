import { Component } from '@angular/core';
import { Personne } from './classe/personne';
import { Stagiaire } from './classes/stagiaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular11';
  tableau: Array<number> = [2, 5, 8, 3];
  stagiaire: Stagiaire = new Stagiaire(100,'Wick', 'john');
  moyennes:Array<number> = [18, 5, 11, 15];
  couleur = 'blue';
  nom = 'wick';

  stagiaires: Array<Stagiaire> = [
    new Stagiaire(100, 'Wick', 'John'),
    new Stagiaire(101, 'Abruzzi', 'John'),
    new Stagiaire(102, 'Marley', 'Bob'),
    new Stagiaire(103, 'Segal', 'Steven')
  ];
  personnes:Personne[]=[new Personne(2, 'wick', 'fric'), new Personne(3, 'wickO', 'fricgo'),
new Personne(6, 'wickA', 'fricGa')];

  direBonjour(){
    return 'Bonjour';
  }
 
getNextColor(): string {
this.couleur = this.couleur === 'red' ? 'blue' : 'red';
return this.couleur;
}
  
}
