import React from 'react'
import { useArray, useMount } from '../../utils'

export const Homework = () => {
  const person: { name: string; age: number }[] = [
    { name: 'jack', age: 25 },
    { name: 'lily', age: 222 }
  ]
  const { newArr, clear, removeIndex, add } = useArray(person)
  useMount(() => {
    // console.log(newArr.notRE)
    // add({ name: 'dad' })
    // removeIndex('123')
  })
  return (
    <div>
      <button onClick={() => add({ name: 'John', age: 23 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>clear</button>
      {newArr.map((person: { age: number; name: string }, index: number) => (
        <div style={{ marginBottom: '30px' }} key={index}>
          <span>{index}</span>
          <span>{person.name}</span>
        </div>
      ))}
    </div>
  )
}
