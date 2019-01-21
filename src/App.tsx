import React from 'react'

import styled from '@emotion/styled'

import Header from './Components/Header'
import MovieList from './Containers/MovieList'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

export default () => (
  <div>
    <Header />
    <Wrapper>
      <MovieList />
    </Wrapper>
  </div>
)
