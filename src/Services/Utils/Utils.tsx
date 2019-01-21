export const makeStringAPositiveInteger = (value: string) => {
  const integerValue = Math.floor(parseInt(value, 10))
  return integerValue > 0 ? integerValue : ''
}
