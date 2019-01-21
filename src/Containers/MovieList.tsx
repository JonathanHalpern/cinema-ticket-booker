import React, { useCallback, useEffect, useState } from 'react'

import styled from '@emotion/styled'
import Snackbar from '@material-ui/core/Snackbar'

import Movie, { MovieType } from '../Components/Movie'

import Api from '../Services/Apis/Apis'
import BookingForm, { BookingObjectType } from './BookingForm'

const initialMovieState = {
  backdrop_path: '',
  id: 0,
  overview: '',
  poster_path: '',
  short_overview: '',
  title: '',
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
    if (createBooking) {
      setSnackbarOpen(true)
    }
  }

  const closeSnackBar = useCallback(() => setSnackbarOpen(false), [])

  useEffect(() => {
    Api.getNowPlaying().then((results) => {
      if (results) {
        setMovies(results)
      }
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
          horizontal: 'center',
          vertical: 'bottom',
        }}
        open={isSnackbarOpen}
        autoHideDuration={2000}
        onClose={closeSnackBar}
        message={BookingCreatedMessage}
      />
    </div>
  )
}
