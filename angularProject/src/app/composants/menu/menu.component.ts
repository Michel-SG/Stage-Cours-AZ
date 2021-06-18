import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  param1 = 'jacky';
  param2 = 'wickilis';
  lienStagiaire='';
  constructor() { 
    this.lienStagiaire = '/stagiaire/' + this.param1 + '/'+ this.param2;
  }

  ngOnInit(): void {
  }

}
