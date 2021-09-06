import axios from 'axios';

const MAIN_API = 'http://www.omdbapi.com'
const API_KEY = '2b1e0664'

export const fetchMoviesApi = (search) => {
    return axios
        .get(`${MAIN_API}/?apikey=${API_KEY}&s=${search}`)
        .then((res) => res.data.Search);
};

export const fetchMoviesApiByID = (ID) => {
    console.log(`${MAIN_API}/?apikey=${API_KEY}&i=${ID}`);
    return axios
        .get(`${MAIN_API}/?apikey=${API_KEY}&i=${ID}`)
        .then((res) => res.data);
};


