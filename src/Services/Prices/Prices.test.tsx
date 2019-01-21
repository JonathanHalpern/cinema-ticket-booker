import { getTotalPrice } from './Prices'
describe('getTotalPrice ', () => {
  it('for no tickets', () => {
    const adultNumber = 0
    const childNumber = 0
    const concessionNumber = 0
    expect(getTotalPrice(adultNumber, childNumber, concessionNumber)).toEqual('0')
  })

  it('for 1 adult only', () => {
    const adultNumber = 1
    const childNumber = 0
    const concessionNumber = 0
    expect(getTotalPrice(adultNumber, childNumber, concessionNumber)).toEqual('10.00')
  })

  it('for 1 child only', () => {
    const adultNumber = 0
    const childNumber = 1
    const concessionNumber = 0
    expect(getTotalPrice(adultNumber, childNumber, concessionNumber)).toEqual('7.50')
  })

  it('for 1 concession only', () => {
    const adultNumber = 0
    const childNumber = 0
    const concessionNumber = 1
    expect(getTotalPrice(adultNumber, childNumber, concessionNumber)).toEqual('5.00')
  })

  it('for 1 of each', () => {
    const adultNumber = 1
    const childNumber = 1
    const concessionNumber = 1
    expect(getTotalPrice(adultNumber, childNumber, concessionNumber)).toEqual('22.50')
  })

  it('for many of each', () => {
    const adultNumber = 2
    const childNumber = 4
    const concessionNumber = 3
    expect(getTotalPrice(adultNumber, childNumber, concessionNumber)).toEqual('65.00')
  })
})
