import { Component } from '@angular/core';
import { Personne } from './classes/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject ';

personne: Personne = new Personne(15, "brosk", "wick");
personnes:Personne[]=[new Personne(2, 'wick', 'fric'), new Personne(3, 'wickO', 'fricgo'),
new Personne(6, 'wickA', 'fricGa')];
tab:number[]=[18, 5, 11, 15];
constructor(){}

bonjour():string{
  return 'dire bonjour';
}

}
