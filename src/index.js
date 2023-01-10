const debounceLead = (callback, offset) => {
  let baseTime = 0
  return (...args) => {
    const currentTime = Date.now()
    if (baseTime + offset <= currentTime) {
      callback(...args)
    }
    baseTime = currentTime
  }
}

const debounceTail = (callback, offset) => {
  let timeoutFunc = null
  return (...args) => {
    clearTimeout(timeoutFunc)
    timeoutFunc = setTimeout(() => callback(...args), offset)
  }
}

// call the correct debounce function
export const debounce = (callback, offset, leading = false) =>
  leading ? debounceLead(callback, offset) : debounceTail(callback, offset)

export const throttle = (callback, offset) => {
  let baseTime = 0
  return (...args) => {
    const currentTime = Date.now()
    if (baseTime + offset <= currentTime) {
      baseTime = currentTime
      callback(...args)
    }
  }
}
