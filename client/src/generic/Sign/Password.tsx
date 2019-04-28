import { TextField } from '@material-ui/core'
import React, { ChangeEventHandler, FC } from 'react'

const Password: FC<PasswordProps> = ({ disabled, error, value, onChange }) => (
  <TextField
    autoFocus={false}
    disabled={disabled}
    error={!!error}
    label="Hasło"
    helperText={error || ' '}
    required
    name="password"
    type="password"
    value={value}
    fullWidth
    onChange={onChange}
  />
)

interface PasswordProps {
  disabled: boolean
  value: string
  onChange: ChangeEventHandler<HTMLElement>
  error: string
}

export default Password
