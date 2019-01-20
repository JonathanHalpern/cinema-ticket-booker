import { TicketValueType } from '../Components/TicketInput'

const prices = {
  adultTicketPrice: 10,
  childTicketPrice: 7.5,
  concessionTicketPrice: 5,
}

export const getTotalPrice = (
  adultNumber: TicketValueType,
  childNumber: TicketValueType,
  concessionNumber: TicketValueType
) => {
  const total =
    (adultNumber || 0) * prices.childTicketPrice +
    (childNumber || 0) * prices.adultTicketPrice +
    (concessionNumber || 0) * prices.concessionTicketPrice
  return total ? total.toFixed(2) : 0
}
