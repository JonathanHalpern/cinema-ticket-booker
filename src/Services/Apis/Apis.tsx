import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3'
const ACCESS_TOKEN = process.env.REACT_APP_THE_MOVIE_DB_ACCESS_TOKEN

const posterUrl = 'https://image.tmdb.org/t/p/w500'

import { MovieType } from '../../Components/Movie'

const instance = axios.create({
  baseURL,
})

const getPoster = (poster_path: string) => `${posterUrl}${poster_path}`

const getNowPlaying = () =>
  instance
    .get(`movie/now_playing?api_key=${ACCESS_TOKEN}&language=en-US&page=1`)
    .then(response => {
      if (response.status === 200) {
        return response.data.results
      } else {
        console.error('Invalid response')
        // Outside the scope for this exercise
      }
    })
    .then(
      results =>
        results &&
        results.map((result: MovieType) => ({
          ...result,
          poster_path: getPoster(result.poster_path),
          backdrop_path: getPoster(result.backdrop_path),
        }))
    )
    .catch(error => {
      console.error('API call failed')
      console.log(error)
      // Outside the scope for this exercise
    })

export default {
  getNowPlaying,
}
