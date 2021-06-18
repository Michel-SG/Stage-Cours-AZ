import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  operateur:any;
  val1=3;
  val2=2;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.operateur= this.route.snapshot.queryParams['op'];
    // this.val1= +this.route.snapshot.queryParams['val1'];
    // this.val2= +this.route.snapshot.queryParams['val2']
  }
  calcul():any{
    if(this.operateur=='plus'){
      return this.val1 +this.val2;
    }else if(this.operateur == 'moins'){
      return this.val1 - this.val2;
    }else if(this.operateur== 'fois'){
      return this.val1 + this.val2;
    }else if(this.operateur=='div'){
      return this.val1 +this.val2;
    }
  }

}
