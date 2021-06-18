import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './composants/observable/observable.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { MenuComponent } from './composants/menu/menu.component';
import { CalculComponent } from './composants/calcul/calcul.component';
import { TableauComponent } from './composants/tableau/tableau.component';
import { ObjetComponent } from './composants/objet/objet.component';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { GetCartPipe } from './pipes/get-cart.pipe';
import { SubStrPipe } from './pipes/sub-str.pipe';
import { SubArrayPipe } from './pipes/sub-array.pipe';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    AdresseComponent,
    StagiaireComponent,
    MenuComponent,
    CalculComponent,
    TableauComponent,
    ObjetComponent,
    NotFoundComponent,
    GetCartPipe,
    SubStrPipe,
    SubArrayPipe,
    FormulaireComponent,
    CalculetteComponent,
    FormComponent,
    CalculetteGroupComponent,
    FormexosComponent,
    HomeComponent,
    PersonneComponent,
    EditPersonneComponent,
    LivreComponent,
    EditLivreComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
