import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  tableau = [2, 3, 8, 1];
  indice = 0;
  next = 0;
  previous = 0;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      this.indice = +res.get('indice');
      this.next = this.indice == this.tableau.length - 1 ? 0 : this.indice + 1;
      this.previous = this.indice == 0 ? this.tableau.length - 1 : this.indice - 1;
    })
  }
  suivant(){
    this.router.navigate(['/tableau', this.next])
  }
  precedent(){
    this.router.navigate(['/tableau', this.previous])
  }

}
