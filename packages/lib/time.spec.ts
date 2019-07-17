import { wait } from './time'

describe('Wait', () => {
  test('Waits 1 second #1', () => {
    jest.useFakeTimers()
    wait(1).catch(_ => _)
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
  })
})
