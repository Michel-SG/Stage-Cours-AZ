import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauComponent } from './tableau/tableau.component';
import { CalculComponent } from './calcul/calcul.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CalculetteComponent } from './calculette/calculette.component';
import { FormComponent } from './form/form.component';
import { PersonneComponent } from './personne/personne.component';
import { PereComponent } from './pere/pere.component';


const routes: Routes = [
  { path: 'tableau/:indice', component: TableauComponent },
  { path: 'calcul/:op', component: CalculComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'calculette', component: CalculetteComponent },
  { path: 'form', component: FormComponent },
  { path: 'user', component: PersonneComponent },
  { path: 'pere', component: PereComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
