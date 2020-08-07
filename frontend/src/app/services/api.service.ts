import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9157'
});

export default api;