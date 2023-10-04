import axios from 'axios';

//Base
// https://api.themoviedb.org/3/
//API now playing
//movie/now_playing?api_key=0357fd07df267e396ccdb3a8686fe6f0&language=pt-br


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;