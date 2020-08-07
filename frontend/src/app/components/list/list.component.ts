import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'; 
import { GenresService } from '../../services/genres.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  genero;
  filmes;
  idGenero;
  maxPag: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private GenresService: GenresService) { 
      router.events.forEach(async (e) => {
        if(e instanceof NavigationEnd) {
          this.genero = e.url.replace('/generos/', '');
          if(this.genero === 'Popular' || this.genero === '' ) {
            return this.getMoviesAll(1);
          } else {
            this.genero = this.genero.replace('%20',' ');
            const generos = await this.GenresService.getGenres();
            const data = generos.find(generos => generos.name === this.genero);
            return this.getMovies(data.id, 1);
          }
        }
      });
    }

  ngOnInit(): void {
  }

  async getMovies(id, page) {
    this.idGenero = id;
    const getFilmes = await this.GenresService.getMoviesByGenre(this.idGenero, page);
    this.maxPag = getFilmes.total_pages;
    this.filmes = getFilmes.results;
    this.filmes.map(filme => {
      filme['poster'] = `http://image.tmdb.org/t/p/w500${filme.poster_path}`
    });
  }

  async getMoviesAll(page) {
    const getAllFilmes = await this.GenresService.getAllMovies(page);
    this.maxPag = getAllFilmes.total_pages;
    this.filmes = getAllFilmes.results;
    this.filmes.map(filme => {
      filme['poster'] = `http://image.tmdb.org/t/p/w500${filme.poster_path}`
    })
  }

  onPaginateChange($event){
    const page = $event.pageIndex+1;
    if(this.genero === 'Popular') {
      this.getMoviesAll(page);
    } else {
      this.getMovies(this.idGenero, page);
    }
  }

  openModal(filme) {
    //console.log(filme);
    filme.genre_names = [];
    filme.genre_ids.forEach( async genreId => {
      const getGeneros = await this.GenresService.getGenres();
      const data = getGeneros.find(generos => generos.id === genreId);
      filme.genre_names.push(data.name);
    });
    this.dialog.open(MovieDetailsComponent, { data: filme });
  }
}
