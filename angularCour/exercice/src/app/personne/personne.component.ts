import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { PipeObject } from '../pipe-object';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  users: Array<User> = new Array<User>();
  personne: PipeObject = new PipeObject(100,'Brick', 'John');
  constructor(private userService: PersonneService) { }

  ngOnInit(): void {
    this.users = this.userService.getAll();
  }

}


