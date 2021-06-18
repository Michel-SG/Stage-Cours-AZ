import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  op = '';
  value1 = 0;
  value2 = 0;
  operation = "";
  result=0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe((res) => {
    //   this.value1 = +res.get('value1');
    //   this.value2 = +res.get('value2');
    // });
    // this.route.paramMap.subscribe((response) => {
    //   this.op = response.get('op');
    // });
    // this.calcul();

    this.route.paramMap.subscribe(
      (value) =>  { 
        this.op = value.get('op');
        this.route.queryParamMap.subscribe((response) => {
          this.value1 = +response.get('value1');
          this.value2 = +response.get('value2');
          this.operation = this.getOperator(this.op);
          this.result = eval(this.value1 + this.operation + this.value2);
        })
      })
  }
  getOperator(op) {
    if (op == "plus") {
      return "+";
    } else if (op == "moins") {
      return "-";
    } else if (op == "fois") {
      return "*";
    } else {
      return "/";
    }
  }
  // calcul() {
  //   if (this.op == 'plus') {
  //     this.result = this.value1 + this.value2
  //   } else if (this.op == 'moins') {
  //     this.result = this.value1 - this.value2
  //   } else if (this.op == 'fois') {
  //     this.result = this.value1 * this.value2
  //   } else if (this.op == 'div') {
  //     this.result = this.value1 / this.value2
  //   }
  // }



}
