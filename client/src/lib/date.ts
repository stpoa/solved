import { differenceInMinutes } from 'date-fns'

export const oneSecond = 1000
export const oneMinute = oneSecond * 60
export const oneHour = oneMinute * 60
export const oneDay = oneHour * 24

export interface TimeLeftSpec {
  days: number
  hours: number
  minutes: number
}

export const getTimeLeft = (expiredAt: number): TimeLeftSpec => {
  const minutesLeft = differenceInMinutes(expiredAt, Date.now())
  const hoursLeft = Math.floor(minutesLeft / 60)
  const daysLeft = Math.floor(hoursLeft / 24)

  return {
    days: daysLeft,
    hours: hoursLeft,
    minutes: minutesLeft
  }
}
