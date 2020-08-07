import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GenresService } from '../../services/genres.service'

@Component({
  selector: 'genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  generos;
  idGenre;
  filmes;
  
  constructor(private GenresService: GenresService, private router: Router) { }

  ngOnInit(): void {
    this.loadGenre();
    this.loadTabAll();
  }

  async loadGenre() {
    return this.generos = await this.GenresService.getGenres();
  }

  async changeRoute($event) {
    const click = this.generos[$event.index-1];
    if($event.index-1 === -1) {
      this.router.navigate(['/generos/Popular']);
    } else {
      this.router.navigate(['/generos', click.name]);
    }
  }

  async loadTabAll() {
    const page = 1;
    return this.filmes = await this.GenresService.getAllMovies(page);
  }

}
