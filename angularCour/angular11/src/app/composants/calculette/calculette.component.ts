import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {
  value1 = 0;
  value2 = 0;
  resultat = 0;

  constructor() { }

  ngOnInit(): void {
  }
  somme() {
    this.resultat = this.value1 + this.value2;
  }
}

