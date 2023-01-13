import { useCallback, useEffect, useState } from 'react'

export const isFalse = (val: any) => (val === 0 ? true : !val)

export const cleanObj = <T>(obj: T): T => {
  const result: T = { ...obj }
  Object.keys(result).forEach((key) => {
    const value = result[key]
    if (isFalse(value)) {
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
}
export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceVal, setDebounceVal] = useState(value)
  useEffect(() => {
    // 每次value变化时，设置一个 定时器
    const timer = setTimeout(() => {
      setDebounceVal(value)
    }, delay)
    // 每次再上个useEffect处理完后再运行
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounceVal
}

export const useArray = <T>(arr: T[]) => {
  const [newArr, setNewArr] = useState(arr)
  const add = useCallback(
    (val: T) => {
      setNewArr([...arr, val])
    },
    [newArr]
  )
  const removeIndex = (i: number) => {
    const copy = [...arr]
    setNewArr(copy.splice(i, 1))
  }
  const clear = () => {
    setNewArr([])
  }
  return { newArr, add, removeIndex, clear }
}
