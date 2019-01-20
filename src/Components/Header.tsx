import React, { ReactNode } from 'react'

import styled from '@emotion/styled'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
` as typeof Toolbar

const StyledLink = styled.a`
  color: inherit;
  :selected {
  }
`

export default () => (
  <AppBar position="static">
    <StyledToolbar>
      <h1>Ticket Booker</h1>
      <StyledLink
        href="https://github.com/JonathanHalpern/cinema-ticket-booker"
        target="blank"
      >
        <h1>Code</h1>
      </StyledLink>
    </StyledToolbar>
  </AppBar>
)
