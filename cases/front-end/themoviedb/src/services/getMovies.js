import axios from 'axios'
import { BASE_GENRE_URL, BASE_URL } from '../Constants/base_url'
import { API_KEY } from '../Constants/api_key'

export const getMovies = (setMovies) => {
    axios.get(`${BASE_URL}popular?${API_KEY}&language=pt-BR`)
        .then((res) => {
            setMovies(res.data.results)
        })
        .catch((err) => {
            console.log(err.message)
        })
}


export const getMovieGenres = (setGenre)=>{
    axios.get(`${BASE_GENRE_URL}list?${API_KEY}&language=pt-BR`)
    .then((res)=> {
        setGenre(res.data.genres)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

export const getMovieDetails = (id, setMovie)=>{
    axios.get(`${BASE_URL}${id}?${API_KEY}&language=pt-BR`)
    .then((res)=> {
        setMovie(res.data)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

export const getActors = (id, setCastInfo) => {  
    axios.get(`${BASE_URL}${id}/credits?${API_KEY}&language=pt-BR`)
    .then((res) => {
        setCastInfo(res.data.cast)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

export const getTrailers = (id, setMovieDetails) => {
    axios.get(`${BASE_URL}${id}?${API_KEY}&append_to_response=videos&language=pt-BR`)
    .then((res) => {
        setMovieDetails(res.data)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}