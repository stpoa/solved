import { TextField } from '@material-ui/core'
import React, { ChangeEventHandler, FC } from 'react'

const Email: FC<EmailProps> = ({
  className,
  disabled,
  onChange,
  error,
  value,
  placeholder = '',
}) => {
  return (
    <TextField
      autoFocus={false}
      className={className}
      disabled={disabled}
      error={Boolean(error)}
      helperText={error || ''}
      label="Email"
      required
      name="email"
      type="email"
      fullWidth
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  )
}

interface EmailProps {
  className?: string
  disabled: boolean
  value: string
  onChange: ChangeEventHandler<HTMLElement>
  error: string
  placeholder?: string
}

export default Email
