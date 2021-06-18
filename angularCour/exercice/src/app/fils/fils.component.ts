import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit, OnChanges {
  @Input() ordre:string = 'Salut';
  @Input() villeDeNaissance: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges):void{
    for(const key of Object.keys(changes)){
      // console.log(`hello ${key}`);
      const obj = changes[key];
     
      for(const cle of Object.keys(obj)){
        // console.log( `Bonjour ${cle}, ${obj[cle] }`);
      }
    }
    
  }
}
