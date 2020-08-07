const { Router } = require('express');
const routes = Router();

const MoviesController = require('./controllers/MoviesController');
const GenresController = require('./controllers/GenresController');

routes.get('/teste', (req, res) => {
    const a = 'teste';
    return res.json(a);
});

//busca todos os filmes
routes.post('/todos', MoviesController.getAllMovies);

//busca detalhes do filme por id
routes.post('/filme', MoviesController.getMovieById);

//busca filmes pelo genero
routes.post('/filmesPorGenero', MoviesController.getMoviesByGenre);

//busca generos
routes.get('/generos', GenresController.getAllGenres);

module.exports = routes;