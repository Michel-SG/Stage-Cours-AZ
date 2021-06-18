import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
tabs=[2, 5, 8, 3];
indice:number = 0;
next =0;
previous=0;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => {
         this.indice = +response.get('id');
         this.next=this.indice == this.tabs.length -1? 0: this.indice +1;
         this.previous = this.indice == 0? this.tabs.length -1: this.indice -1;
       });
      
  }
  affichersuivant(){
    this.router.navigate(["/tableau",this.next])
  }
  afficherPrecedant(){
    this.router.navigate(["/tableau",this.previous])
  }
  

}
