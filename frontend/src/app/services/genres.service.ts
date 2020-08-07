import { Injectable } from '@angular/core';
import api  from './api.service';


@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor() { }

  async getGenres() {
    try {
      const response = await api.get('generos'); 
      // console.clear();
      // console.log("Generos", response.data.genres);
      return response.data.genres;
    } catch (error) {
      console.log(error);
    }
  }

  async getMoviesByGenre(id, page) {
    const data = {
      id,
      page
    }
    const response = await api.post('filmesPorGenero', data);
    // console.clear();
    // console.log("filmes por genero", response.data);
    return response.data;
  }

  async getAllMovies(page) {
    const data = { page }
    const response = await api.post('todos', data);
    // console.clear();
    // console.log("Todos filmes", response.data);
    return response.data;
  }
  
}
