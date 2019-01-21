import React, { useState, useEffect, useCallback } from 'react'
import styled from '@emotion/styled'

import Api from '../Services/Apis/Apis'
import Snackbar from '@material-ui/core/Snackbar'
import Movie, { MovieType } from '../Components/Movie'
import BookingForm, { BookingObjectType } from './BookingForm'

const initialMovieState = {
  title: '',
  poster_path: '',
  backdrop_path: '',
  overview: '',
  short_overview: '',
  id: 0,
}

const BookingCreatedMessage = <span>Booking created</span>

const StyledMovie = styled(Movie)`
  margin: 20px;
`

export default () => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)
  const [isSnackbarOpen, setSnackbarOpen] = useState<boolean>(false)
  const [selectedMovie, setMovie] = useState<MovieType>(initialMovieState)
  const [movieList, setMovies] = useState<MovieType[]>([])

  const openBookingPopup = (movie: MovieType) => {
    setMovie(movie)
    setDialogOpen(true)
  }

  const closeBookingForm = ({ createBooking }: BookingObjectType) => {
    setDialogOpen(false)
    createBooking && setSnackbarOpen(true)
  }

  const closeSnackBar = useCallback(() => setSnackbarOpen(false), [])

  useEffect(() => {
    Api.getNowPlaying().then(results => {
      results && setMovies(results)
    })
  }, [])

  return (
    <div>
      {movieList.length > 0 &&
        movieList.map((movie: MovieType) => (
          <StyledMovie
            title={movie.title}
            poster_path={movie.poster_path}
            backdrop_path={movie.backdrop_path}
            overview={movie.overview}
            key={movie.id}
            onClick={useCallback(() => {
              openBookingPopup(movie)
            }, [])}
          />
        ))}
      {movieList.length > 0 && (
        <BookingForm
          isDialogOpen={isDialogOpen}
          handleClose={closeBookingForm}
          {...selectedMovie}
        />
      )}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={isSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeSnackBar}
        message={BookingCreatedMessage}
      />
    </div>
  )
}
