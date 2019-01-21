import { TicketValueType } from '../../Components/TicketInput'

const prices = {
  adultPrice: 10,
  childPrice: 7.5,
  concessionPrice: 5,
}

export const getTotalPrice = (
  adultNumber: TicketValueType,
  childNumber: TicketValueType,
  concessionNumber: TicketValueType
) => {
  const total =
    (adultNumber || 0) * prices.adultPrice +
    (childNumber || 0) * prices.childPrice +
    (concessionNumber || 0) * prices.concessionPrice
  return total ? total.toFixed(2) : '0'
}
