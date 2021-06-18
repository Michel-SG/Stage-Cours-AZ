import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/interfaces/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  livres: Livre[] = [];
  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.livres = this.livreService.getAllLivre();
  }

  delete(isbn: string){
    this.livreService.deleteLivre(isbn);
  }

}
