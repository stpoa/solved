import {
  addDays,
  addHours,
  addMinutes,
  subDays,
  subHours,
  subMinutes,
} from 'date-fns'

export type DateLike = number | string | Date

export const wait = (seconds: number) =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000))

export const addTime = (
  fromDate: DateLike,
  minutes: number,
  hours = 0,
  days = 0,
) => {
  const withMinutes = addMinutes(fromDate, minutes)
  const withHours = addHours(withMinutes, hours)
  const withDays = addDays(withHours, days)

  return withDays.toISOString()
}

export const subTime = (
  fromDate: DateLike,
  minutes: number,
  hours = 0,
  days = 0,
) => {
  const withMinutes = subMinutes(fromDate, minutes)
  const withHours = subHours(withMinutes, hours)
  const withDays = subDays(withHours, days)

  return withDays.toISOString()
}
