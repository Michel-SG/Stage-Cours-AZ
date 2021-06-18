import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private url = 'http://localhost:3000/personne/';
 
  constructor(private http:HttpClient) { }
  getAllPersonnes() {
    return this.http.get<Array<Personne>>(this.url);
  }
  addPersonne(p:Personne){
    return this.http.post(this.url, p);
      
  }
  suppression(num: number){
    // let p :Personne = this.personnes.find(elt=>elt.id===id)
    // this.personnes.splice(this.personnes.indexOf(p), 1);
    return this.http.delete(this.url+num);
  }

  getOnePersonne(num:number){
    // let person:Personne = this.personnes.find(pers=>pers.num===num);
    // return person;
    return this.http.get<Personne>(this.url + num);
  }
  modifyPersonne(personne:Personne){
    // let p :Personne = this.personnes.find(elt=>elt.num===personne.num)
    // this.personnes[this.personnes.indexOf(p)]= personne;
    return this.http.put<Personne>(this.url+personne.num, personne);
  }
}
