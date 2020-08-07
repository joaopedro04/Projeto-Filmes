const axios = require('axios');

module.exports = {
    async getAllGenres(req, res) {
        try {
            const getGenres = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=64c470c6d174e558b9af2e27ddc57425&language=en-US&include_adult=true`);
            return res.json(getGenres.data);    
        } catch (error) {
            return res.json({
                "error": error.message
            });
        }     
    }
};