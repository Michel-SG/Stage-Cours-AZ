import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.css']
})
export class EditPersonneComponent implements OnInit {
  num: number;
  personne: Personne = {};
  constructor(private personneService: PersonneService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => {
      this.num = +response.get('id');
      console.log("l'id recherché"+this.num)
      this.personneService.getOnePersonne(this.num).subscribe(
        (response)=>{
          this.personne = response;
        }
      );
    });

    
  }

  modifierPersonne() {
    this.personneService.modifyPersonne(this.personne).subscribe((personne:Personne)=>{
      this.router.navigate(["/personne"]);
    });
   
  }


}
