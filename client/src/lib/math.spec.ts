import { isNumber } from '~lib/math'
import { sum } from './math'

describe('sum', () => {
  test('sums 0 arguments', () => {
    expect(sum()).toBe(0)
  })

  test('sums 2 arguments', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('sums 100 arguments', () => {
    expect(sum(...Array(100).fill(1))).toBe(100)
  })
})

describe('isNumber', () => {
  test('integer is a number', () => {
    expect(isNumber(1)).toBe(true)
  })

  test('float is a number', () => {
    expect(isNumber(1.111)).toBe(true)
  })

  test('infinity is not a number', () => {
    expect(isNumber(Infinity)).toBe(false)
  })

  test('null is not a number', () => {
    expect(isNumber(null)).toBe(false)
  })

  test('undefined is not a number', () => {
    expect(isNumber(undefined)).toBe(false)
  })
})
