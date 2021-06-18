import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Livre } from 'src/app/interfaces/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-formexos',
  templateUrl: './formexos.component.html',
  styleUrls: ['./formexos.component.css']
})
export class FormexosComponent implements OnInit {
  livres: Array<Livre> = [];

  livreForm = this.fb.group({
    isbn: ['', Validators.required],
    titre: ['', Validators.required],
    nbrPage: ['', Validators.required],
    motsCles: this.fb.array([
      this.fb.control('', Validators.required)
    ]),
    auteurs: this.fb.array([
      this.fb.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
      }),
    ])
  });

  constructor(private fb: FormBuilder, private livreService: LivreService, private router: Router) { }

  ngOnInit(): void {

  }
  afficherTout() {
    // this.livres.push(this.livreForm.value);
    // console.log(this.livreForm.value);
    // this.livreForm.reset();
    // this.motsCles.clear();
    // this.auteurs.clear();
    
    this.livreService.creatOneLivre(this.livreForm.value);
    this.router.navigate['/liv'];
  }
  get motsCles(): FormArray {
    return this.livreForm.get('motsCles') as FormArray;
  }
  get auteurs(): FormArray {
    // return this.livreForm.get('auteurs') as FormArray;
    return this.livreForm.controls.auteurs as FormArray;
  }
  ajouterMotCle(): void {
    this.motsCles.push(this.fb.control(''));
  }
  ajouterAuteur() {
    this.auteurs.push(this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required]
    }));
  }
  supprimer(index) {
    this.livres.splice(index, 1);
  }

}





