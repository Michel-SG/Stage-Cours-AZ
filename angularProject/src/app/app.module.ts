import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { MenuComponent } from './composants/menu/menu.component';
import { CalculComponent } from './composants/calcul/calcul.component';
import { TableauComponent } from './composants/tableau/tableau.component';
import { VehiculeModule } from './modules/vehicule/vehicule.module';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    StagiaireComponent,
    AdresseComponent,
    MenuComponent,
    CalculComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VehiculeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('app-module');
  }
 }
