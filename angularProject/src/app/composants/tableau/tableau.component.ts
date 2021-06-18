import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  numbers = [2, 3, 8, 1];
  indice= 0;
  next = 0;
  previous = 0;
  result = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((response:ParamMap) => {
      this.indice = +response.get('indice');
    });

  }

  // afficher(){


  // }

}
