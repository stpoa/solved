import { limitWords } from './text'

describe.only('limitWords', () => {
  test('limits words to 0', () => {
    expect(limitWords(2)('test')).toBe('')
  })

  test('limits words to 2', () => {
    expect(limitWords(9)('test test test')).toBe('test test')
  })
})
