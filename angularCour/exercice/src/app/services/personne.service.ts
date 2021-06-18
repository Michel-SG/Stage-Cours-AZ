import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
users:Array<User>= new Array<User>();
  constructor() { 
    this.users.push({id:1, nom:'wick', prenom:'john'});
    this.users.push({id:2, nom:'green', prenom:'bob'});
  }
  getAll():Array<User>{
    return this.users;
  }

  addUser(user: User): void{
    this.users.push(user);
  }
}
