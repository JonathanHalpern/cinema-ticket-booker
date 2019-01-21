import { makeStringAPositiveInteger } from './Utils'
describe('makeStringAPositiveInteger ', () => {
  it('for a "0" string', () => {
    expect(makeStringAPositiveInteger('0')).toEqual('')
  })

  it('for negative number strings', () => {
    expect(makeStringAPositiveInteger('-1')).toEqual('')
    expect(makeStringAPositiveInteger('-4.3')).toEqual('')
  })

  it('for non number string', () => {
    expect(makeStringAPositiveInteger('test')).toEqual('')
  })

  it('for integer strings', () => {
    expect(makeStringAPositiveInteger('4')).toEqual(4)
    expect(makeStringAPositiveInteger('36')).toEqual(36)
  })

  it('for positive non integers strings', () => {
    expect(makeStringAPositiveInteger('1.6')).toEqual(1)
    expect(makeStringAPositiveInteger('9.99')).toEqual(9)
  })
})
