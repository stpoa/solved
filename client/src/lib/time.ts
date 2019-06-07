import { addDays, addHours, addMinutes } from 'date-fns'

export type DateLike = number | string | Date

export const wait = (seconds: number) =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000))

export const addTime = (
  fromDate: DateLike,
  minutes: number,
  hours: number,
  days: number,
) => {
  const withMinutes = addMinutes(fromDate, minutes)
  const withHours = addHours(withMinutes, hours)
  const withDays = addDays(withHours, days)

  return withDays.getTime()
}
