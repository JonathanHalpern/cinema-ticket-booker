import React, { FC } from 'react'

import LinesEllipsis from 'react-lines-ellipsis'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import styled from '@emotion/styled'

import Typography from '@material-ui/core/Typography'

const StyledCard = styled(Card)`
  display: flex;
  height: 160px;
` as typeof Card

const StlyedContent = styled(CardContent)`
  flex: 1;
` as typeof CardContent

const StlyedMedia = styled(CardMedia)`
  width: 100px;
` as typeof CardMedia

const Overview = styled(LinesEllipsis)<any>`
  line-height: 1.75;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.54);
`

const Details = styled.div`
  display: flex;
  height: fill-available;
`

export type MovieType = {
  title: string
  poster_path: string
  backdrop_path: string
  overview: string
  id?: number
}

type Props = MovieType & {
  className?: string
  onClick: () => void
}

const Movie: FC<Props> = ({
  title,
  poster_path,
  overview,
  className,
  onClick,
}: Props) => (
  <StyledCard className={className ? className : ''}>
    <CardActionArea onClick={onClick}>
      <Details>
        <StlyedMedia image={poster_path} title={title} />
        <StlyedContent>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Overview
            text={overview}
            maxLine="3"
            ellipsis="..."
            trimRight={true}
            basedOn="letters"
          />
        </StlyedContent>
      </Details>
    </CardActionArea>
  </StyledCard>
)

export default Movie
