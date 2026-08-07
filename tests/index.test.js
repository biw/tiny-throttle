import { afterEach, beforeEach, expect, test, vi } from 'vite-plus/test'

import { debounce, throttle } from '../src/index'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

test('throttle function only fires once a second', () => {
  vi.spyOn(Date, 'now')
    .mockImplementationOnce(() => 1000)
    .mockImplementationOnce(() => 2002)
    .mockImplementationOnce(() => 2004)
    .mockImplementationOnce(() => 3003)
    .mockImplementationOnce(() => 4005)
    .mockImplementationOnce(() => 5005)
    .mockImplementationOnce(() => 5006)
    .mockImplementationOnce(() => 5007)
    .mockImplementationOnce(() => 5008)
    .mockImplementationOnce(() => 5009)
  const callback = vi.fn()
  const containerFunc = throttle(callback, 1000)

  ;[...Array(10)].forEach(containerFunc)

  expect(callback).toHaveBeenCalledTimes(5)
})

test('debounceLead function fires once then waits a second', () => {
  vi.spyOn(Date, 'now')
    .mockImplementationOnce(() => 1000)
    .mockImplementationOnce(() => 1500)
    .mockImplementationOnce(() => 2000)
    .mockImplementationOnce(() => 2500)
    .mockImplementationOnce(() => 3500)
    .mockImplementationOnce(() => 4500)
    .mockImplementationOnce(() => 5000)
    .mockImplementationOnce(() => 6000)
    .mockImplementationOnce(() => 7000)
    .mockImplementationOnce(() => 7001)

  const callback = vi.fn()
  const containerFunc = debounce(callback, 1000, true)

  ;[...Array(10)].forEach(containerFunc)

  expect(callback).toHaveBeenCalledTimes(5)
})

test('debounceTail function fires one second after the last event', () => {
  const callback = vi.fn()
  const containerFunc = debounce(callback, 1000)
  containerFunc()

  vi.advanceTimersByTime(500)

  containerFunc()

  vi.advanceTimersByTime(1000)

  containerFunc()

  containerFunc()

  vi.advanceTimersByTime(1500)

  containerFunc()

  vi.advanceTimersByTime(1000)

  containerFunc()

  expect(callback).toHaveBeenCalledTimes(3)
})
