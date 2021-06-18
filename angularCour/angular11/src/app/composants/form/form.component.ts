import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
// nom = new FormControl('');
personnes:Array<Personne>=[];

// personneForm = new FormGroup({
//   id: new FormControl('', Validators.required),
//   nom: new FormControl('', [Validators.pattern(/^[A-Z][a-z]{2,10}$/), Validators.required]),
//   prenom: new FormControl('', [Validators.required, checkPrenomValidator]),
//   adresse: new FormGroup({
//     rue: new FormControl(''),
//     ville: new FormControl(''),
//     codePostal: new FormControl('')
//   })
// });
personneForm = this.fb.group({
  id: [null],
  nom: ['doe'],
  prenom: ['', [Validators.required, Validators.minLength(2)]],
  adresse: this.fb.group({
    rue: [''],
    ville: [''],
    codePostal: ['']
  }),
  sports: this.fb.array([
    this.fb.control('')
  ])
});
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  // affichernom(){
  //   console.log(this.nom.value);
  // }
  afficherTout() {
    // console.log(this.personneForm.value);
    // console.log(this.personneForm.controls.nom.value);
    // console.log(this.personneForm.get('nom').value);
    
    this.personnes.push(this.personneForm.value);
    console.log(this.personneForm.value);
    this.personneForm.reset(this.personneForm.controls.adresse.reset());
    
  }

  get nom(): AbstractControl | null {
    return this.personneForm.get('nom');
  }
  get id(): AbstractControl | null {
    return this.personneForm.get('id');
  }
  get prenom(): AbstractControl | null {
    return this.personneForm.get('prenom');
  }
  get sports(): FormArray {
    return this.personneForm.get('sports') as FormArray;
  }

  supprimer(index){
    this.personnes.splice(index,1);
  }
  ajouterSport(): void {
    this.sports.push(this.fb.control(''));
  }

}
function checkPrenomValidator(control: FormControl): object | null {
  // il doit retourner null si tou va bien
  const str: string = control.value;
  if (str[0] >= 'A' && str[0] <= 'Z') {
    return null;
  } else {
    return { erreur: 'Prénom non valide' };
  }
  
}
