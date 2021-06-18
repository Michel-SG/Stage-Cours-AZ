import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculette-group',
  templateUrl: './calculette-group.component.html',
  styleUrls: ['./calculette-group.component.css']
})
export class CalculetteGroupComponent implements OnInit {

  valeur1 =0;
  valeur2 =0;
  operateur='';
  op='';
  result=0;
  personneForm = new FormGroup({
    value1: new FormControl('', Validators.required),
    value2: new FormControl('', Validators.required),
   
  });
  constructor() { }

  ngOnInit(): void {
  }
  afficherTout(){
    this.op='+'
    this.valeur1 = this.personneForm.get('value1').value;
    this.valeur2 = this.personneForm.get('value2').value;
    this.result = eval(this.valeur1 + this.op + this.valeur2);
  }

}
