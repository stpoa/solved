import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

export const requiredValidator = (
  value: string | boolean,
  msg: string = 'Pole jest wymagane!',
) => (!value ? msg : '')

export const emailValidator: Validator = value =>
  requiredValidator(value) || !isEmail(value)
    ? 'Nieprawidłowy adres email!'
    : ''

export const passwordLengthValidator: Validator = (
  value,
  msg = 'Hasło jest zbyt krótkie!',
) => (requiredValidator(value) || !isLength(value, { min: 6 }) ? msg : '')

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s])/

export const passwordValidator: Validator = value => {
  const trimmedValue = value.trim()

  return passwordLengthValidator(trimmedValue) ||
    !passwordRegex.test(trimmedValue)
    ? 'Nieprawidłowe hasło!'
    : ''
}

type Validator = (value: string, msg?: string) => string
