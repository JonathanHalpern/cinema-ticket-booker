export const makeStringAPositiveInteger = (value: string) => {
  const integerValue = Math.floor(parseInt(value))
  return integerValue > 0 ? integerValue : ''
}
