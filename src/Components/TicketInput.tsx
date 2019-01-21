import React, { FC, useCallback } from 'react'

import TextField from '@material-ui/core/TextField'

import { makeStringAPositiveInteger } from '../Services/Utils/Utils'

export type TicketValueType = number | ''

type Props = {
  label: string
  value: TicketValueType
  setValue: (_: TicketValueType) => void
}

const TicketInput: FC<Props> = ({ label, value, setValue }: Props) => {
  const onChange = useCallback((e) => {
    const newValue = makeStringAPositiveInteger(e.target.value)
    setValue(newValue)
  }, [])
  return (
    <TextField
      label={label}
      type="number"
      value={value}
      onChange={onChange}
      margin="none"
      inputProps={{ min: '0', max: '10', step: '1' }}
    />
  )
}

export default TicketInput
