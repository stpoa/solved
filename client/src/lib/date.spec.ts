import { getTimeLeft, oneDay, oneHour } from './date'

describe('Get time left', () => {

  test('Returns 0 difference when current time equals expiredAt', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 0)
    const expiredAt = 0
    expect(getTimeLeft(expiredAt)).toEqual({ days: 0, hours: 0, minutes: 0 })
  })

  test('Returns 1 day difference', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 0)
    const expiredAt = oneDay
    expect(getTimeLeft(expiredAt)).toEqual({ days: 1, hours: 24, minutes: 1440 })
  })

  test('Returns 1 hour difference', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 0)
    const expiredAt = oneHour
    expect(getTimeLeft(expiredAt)).toEqual({ days: 0, hours: 1, minutes: 60 })
  })

})
