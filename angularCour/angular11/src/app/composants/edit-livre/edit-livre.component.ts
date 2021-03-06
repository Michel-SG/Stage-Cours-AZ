import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.css']
})
export class EditLivreComponent implements OnInit {
  livreForm = this.fb.group({
    isbn: [''],
    titre: [''],
    nbrPage: [],
    motsCles: this.fb.array([
    ]),
    auteurs: this.fb.array([
    ]),
  });

  constructor( private fb: FormBuilder, // construire le formulaire
    private route: ActivatedRoute, // récupérer le paramètre :isbn
    private livreService: LivreService, // communiquer avec le backend
    private router: Router // rediriger vers le composant livre
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      // première étape
      const isbn = value.get('id');
      // deuxième étape
      const livre = this.livreService.getLivreById(isbn);

      this.livreForm.patchValue({isbn: livre.isbn, titre: livre.titre, nbrPage: livre.nbrPage});
      livre.motsCles.forEach(elt => {
        this.motsCles.push(this.fb.control(elt));
      });
      livre.auteurs.forEach(elt => {
        this.auteurs.push(this.fb.group({
          nom: [elt.nom, Validators.required],
          prenom: [elt.prenom, Validators.required],
        }));
      });
    });
  }
  get motsCles(): FormArray {
    return this.livreForm.get('motsCles') as FormArray;
  }
  get auteurs(): FormArray {
    return this.livreForm.get('auteurs') as FormArray;
  }
  nom(i: string) {
    return this.auteurs.get(i).get('nom');
  }
  ajouterMotCle() {
    this.motsCles.push(this.fb.control(''));
  }

  ajouterAuteur() {
    this.auteurs.push(this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
    }))
  }
  modifierLivre() {
    this.livreService.editLivre(this.livreForm.value);
    this.router.navigateByUrl('/livre');
  }

}
