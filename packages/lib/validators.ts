import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

// Limiters
export const makeLengthLimit = (max: number) => (value: string) =>
  value.slice(0, max)

export const makeNoFirstDigit = (value: string) =>
  isNumberLike(value[0]) ? value.slice(1) : value

export const makeAlphanumeric = (value: string) => value.replace(/\W/g, '')

export const isNumberLike = (value: string) => {
  return Number(value).toString() === value
}

// Checks
export const isWithinLengthLimit = (max: number) => (value: string) =>
  makeLengthLimit(max)(value) === value

export const hasNoFirstDigit = (value: string) =>
  makeNoFirstDigit(value) === value

export const isAlphanumeric = (value: string) =>
  makeAlphanumeric(value) === value

// Validators
export const requiredValidator = (
  value: string | boolean,
  msg: string = 'Pole jest wymagane!',
) => (!value ? msg : '')

export const minLengthValidator = (min: number) => (value: string) =>
  value.length < min ? `Zbyt mała ilość znaków! (minimum: ${min})` : ''

export const maxLengthValidator = (max: number) => (value: string) =>
  !isWithinLengthLimit(max)(value)
    ? `Zbyt duza ilość znaków! (maximum: ${max})`
    : ''

export const emailValidator: Validator = value =>
  requiredValidator(value) || !isEmail(value)
    ? 'Nieprawidłowy adres email!'
    : ''

export const alphaValidator = (value: string) =>
  !isAlphanumeric(value)
    ? 'Wyraz powinien składać się tylko z liter od a do z'
    : ''

export const nickValidator: Validator = (value: string) =>
  requiredValidator(value) ||
  minLengthValidator(5)(value) ||
  maxLengthValidator(15)(value) ||
  alphaValidator(value)

export const passwordLengthValidator: Validator = (
  value,
  msg = 'Hasło jest zbyt krótkie!',
) => (requiredValidator(value) || !isLength(value, { min: 6 }) ? msg : '')

export const passwordValidator: Validator = value => {
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s])/
  const trimmedValue = value && value.trim()

  return passwordLengthValidator(trimmedValue) ||
    !passwordRegex.test(trimmedValue)
    ? 'Nieprawidłowe hasło!'
    : ''
}

type Validator = (value: string, msg?: string) => string
