import isEmail from 'validator/lib/isEmail'

export const emailValidator = (value: string) =>
  !value
    ? 'Pole jest wymagane!'
    : !isEmail(value)
    ? 'Nieprawidłowy adres email!'
    : ''
