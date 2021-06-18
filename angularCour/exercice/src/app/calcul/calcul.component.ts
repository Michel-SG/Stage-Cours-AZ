import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  value1=0;
  value2=0;
  result=0;
  op='';
  operateur='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res)=>{
      this.op = res.get('op');
      this.route.queryParamMap.subscribe((res)=>{
        this.value1 = +res.get('value1');
        this.value2 = +res.get('value2');
      })
    });
    if(this.op=='plus'){
      this.operateur='+';
    }else if(this.op=='moins'){
      this.operateur='-';
    }else if(this.op=='fois'){
      this.operateur = '*';
    }else{
      this.operateur = '/';
    }
    this.result= eval(this.value1 + this.operateur + this.value2)
  }

}
