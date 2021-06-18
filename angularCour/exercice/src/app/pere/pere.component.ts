import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilsComponent } from '../fils/fils.component';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit, AfterViewInit {
  // @ViewChild(FilsComponent, {static:true}) fils: FilsComponent;
  @ViewChildren(FilsComponent) fils: QueryList<FilsComponent> |undefined;
  tab:Array<string>=['premier', 'deuxième', 'troisième'];
  nord = 'Lille';
  sud = 'Marseille';
  capitale ='Paris';
  constructor() { }

  ngOnInit(): void {
   
  }
ngAfterViewInit(){
  this.fils?.forEach(elt=>console.log(elt))
  
}
}
