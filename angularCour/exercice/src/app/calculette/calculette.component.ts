import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {
  value1 = null;
  value2 = null;
  result = null;
  op = '';
  operateur='';
  constructor() { }

  ngOnInit(): void {

  }
  plus() {
    this.op = '+';
    this.operateur='addition';
    this.result = eval(this.value1 + this.op + this.value2);
    this.value1 = null;
    this.value2 = null;
  }
  moins() {
    this.op = '-';
    this.operateur='soustraction';
    this.result = eval(this.value1 + this.op + this.value2);
    this.value1 = null;
    this.value2 = null;
  }
  fois() {
    this.op = '*';
    this.operateur='multiplication';
    this.result = eval(this.value1 + this.op + this.value2);
    this.value1 = null;
    this.value2 = null;
  }
  div() {
    this.op = '/';
    this.operateur='division';
    this.result = eval(this.value1 + this.op + this.value2);
    this.value1 = null;
    this.value2 = null;
  }
}
