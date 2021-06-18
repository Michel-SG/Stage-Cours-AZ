import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableauComponent } from './tableau/tableau.component';
import { CalculComponent } from './calcul/calcul.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculetteComponent } from './calculette/calculette.component';
import { FormComponent } from './form/form.component';
import { PersonneComponent } from './personne/personne.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableauComponent,
    CalculComponent,
    FormulaireComponent,
    CalculetteComponent,
    FormComponent,
    PersonneComponent,
    PereComponent,
    FilsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
