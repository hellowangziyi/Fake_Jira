import { useEffect, useState } from 'react'

export const isFalse = (val) => (val === 0 ? true : !val)

export const cleanObj = (obj) => {
  let result = { ...obj }
  Object.keys(result).forEach((key) => {
    const value = result[key]
    if (isFalse(value)) {
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}
export const useDebounce = (value, delay) => {
  const [debounceVal, setDebounceVal] = useState(value)
  useEffect(() => {
    // 每次value变化时，设置一个定时器
    const timer = setTimeout(() => {
      setDebounceVal(value)
    }, delay)
    // 每次再上个useEffect处理完后再运行
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounceVal
}

export const useThrottle = (value, delay) => {
  const [throttleVal, setThrottleVal] = useState(value)
  useEffect(() => {
    let timer = setTimeout(() => {
      setThrottleVal(value)
    }, delay)
    timer = null
    return () => {
      if (timer) return
      return throttleVal
    }
  }, [value, delay])
}
