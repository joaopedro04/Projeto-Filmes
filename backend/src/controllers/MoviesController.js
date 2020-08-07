const axios = require('axios');

module.exports = {
    async getAllMovies(req, res) {
        try {
            const { page } = req.body
            const getFilms = await axios.get(`http://api.themoviedb.org/3/movie/popular?api_key=64c470c6d174e558b9af2e27ddc57425&page=${page}&include_adult=true`);
            return res.json(getFilms.data);    
        } catch (error) {
            return res.json({
                "error": error.message
            });
        }     
    },

    async getMovieById(req, res) {
        try {
            const { id } = req.body;
            const getMovie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=64c470c6d174e558b9af2e27ddc57425`);
            return res.json(getMovie.data);    
        } catch (error) {
            return res.json({
                "error": error.message
            });
        }     
    },

    async getMoviesByGenre(req, res) {
        try {
            const { id, page } = req.body;
            const getMovie = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=64c470c6d174e558b9af2e27ddc57425&page=${page}`);
            return res.json(getMovie.data);    
        } catch (error) {
            return res.json({
                "error": error.message
            });
        }     
    },

};