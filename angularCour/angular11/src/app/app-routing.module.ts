import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { CalculComponent } from './composants/calcul/calcul.component';
import { TableauComponent } from './composants/tableau/tableau.component';
import { ObjetComponent } from './composants/objet/objet.component';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { FormComponent } from './composants/form/form.component';
import { CalculetteGroupComponent } from './composants/calculette-group/calculette-group.component';
import { FormexosComponent } from './composants/formexos/formexos.component';
import { HomeComponent } from './composants/home/home.component';
import { PersonneComponent } from './composants/personne/personne.component';
import { EditPersonneComponent } from './composants/edit-personne/edit-personne.component';
import { LivreComponent } from './composants/livre/livre.component';
import { EditLivreComponent } from './composants/edit-livre/edit-livre.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{path:'adresse', component:AdresseComponent},
{path:'tableau/:id', component:TableauComponent  },
{path:'objet/:attribut', component:ObjetComponent  },
{path:'stagiaire', component:StagiaireComponent },
{path:'calculette', component:CalculetteComponent },
{path:'calculette-group', component:CalculetteGroupComponent },
{path:'calcul/:op', component:CalculComponent },
{path:'formulaire', component:FormulaireComponent},
{path:'stagiaire/:nom/:prenom', component:StagiaireComponent },
{path:'form', component:FormComponent },
{path:'livre', component:FormexosComponent},
{path:'personne', component: PersonneComponent},
{path:'editPersonne/:id', component: EditPersonneComponent },
{path:'home', component: HomeComponent},
{path:'liv', component: LivreComponent, canActivate: [AuthGuard]},
{path:'editLivre/:id', component: EditLivreComponent},
{path:'connexion', component: ConnexionComponent},
{path:'error', component: NotFoundComponent},
{path:'', redirectTo: "/home", pathMatch: "full"},
{path: '**', redirectTo:'/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
