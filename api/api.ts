import axios from "axios";

export const api = axios.create({
    baseURL:'https://imdb-top-100-movies.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '1342741819msh89312f8439d3a0dp1fbe0djsn3b13acc922b1',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
})
