import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { CalculComponent } from './composants/calcul/calcul.component';
import { TableauComponent } from './composants/tableau/tableau.component';
import { CamionComponent } from './modules/vehicule/camion/camion.component';
import { VoitureComponent } from './modules/vehicule/voiture/voiture.component';

const routes: Routes = [{path: 'stagiaire', component:StagiaireComponent},
{path: 'stagiaire/:nom/:prenom', component:StagiaireComponent},
{path: 'calcul/:op', component:CalculComponent},
{path: 'adresse', component:AdresseComponent},
{path: 'tableau/:indice', component:TableauComponent},
{path: 'vehicule', children:[
  {path: 'camion', component: CamionComponent},
  {path: 'voiture', component: VoitureComponent},
  {path:'', component: VoitureComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
