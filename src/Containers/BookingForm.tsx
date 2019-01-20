import React, { useCallback, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import styled from '@emotion/styled'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import TicketInput, { TicketValueType } from '../Components/TicketInput'

export type BookingObjectType = {
  createBooking: boolean
}

type Props = {
  isDialogOpen: boolean
  handleClose: ({ createBooking }: BookingObjectType) => void
  title: string
  backdrop_path: string
}

const StyledCard = styled(Card)`
  min-width: 330px;
` as typeof Card

const StlyedMedia = styled(CardMedia)`
  height: 180px;
` as typeof CardMedia

const StlyedCardAction = styled(CardActions)`
  padding: 15px;
` as typeof CardActions

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  margin: 0;
  text-align: center;
  padding: 5px;
`

const Total = styled.p`
  margin: 10px 0 0 0;
`

export default ({ isDialogOpen, title, backdrop_path, handleClose }: Props) => {
  const [adultNumber, setAdultNumber] = useState<TicketValueType>('')
  const [childNumber, setChildNumber] = useState<TicketValueType>('')
  const [concessionNumber, setConcessionNumber] = useState<TicketValueType>('')

  const onExit = () => {
    setAdultNumber('')
    setChildNumber('')
    setConcessionNumber('')
  }

  const disabled = childNumber || adultNumber || concessionNumber ? false : true

  const prices = {
    adultTicketPrice: 10,
    childTicketPrice: 7.5,
    concessionTicketPrice: 5,
  }

  const totalPrice =
    ((childNumber || 0) * prices.childTicketPrice || 0) +
    ((adultNumber || 0) * prices.adultTicketPrice || 0) +
    ((concessionNumber || 0) * prices.concessionTicketPrice || 0)

  const onCancel = useCallback(() => handleClose({ createBooking: false }), [])

  const onConfirm = useCallback(() => handleClose({ createBooking: true }), [])

  return (
    <Dialog open={isDialogOpen} onClose={onCancel} onExit={onExit}>
      <StyledCard>
        <div>
          <Title>{title}</Title>
          <StlyedMedia image={backdrop_path} title={title} />
          <CardContent>
            <FormInputs>
              <TicketInput
                label="Adult (£10)"
                value={adultNumber}
                setValue={setAdultNumber}
              />
              <TicketInput
                label="Child (£7.50)"
                value={childNumber}
                setValue={setChildNumber}
              />
              <TicketInput
                label="Concession (£5)"
                value={concessionNumber}
                setValue={setConcessionNumber}
              />
            </FormInputs>
            <Total>Total: £{totalPrice}</Total>
          </CardContent>
        </div>
        <StlyedCardAction>
          <Button variant="contained" disabled={disabled} onClick={onConfirm}>
            Confirm
          </Button>
          <Button variant="contained" color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </StlyedCardAction>
      </StyledCard>
    </Dialog>
  )
}
