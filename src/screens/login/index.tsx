import React from 'react'
import { API } from '../../utils/axios'
import { useAuth } from '../../context/auth'

export const Login = () => {
  // const getLogin = async (param: { username: string; password: string }) => {
  //   const res = await API.post(
  //     `http://127.0.0.1:4523/m1/1705926-0-default/login`,
  //     { param }
  //   )
  //   console.log('login', res)
  // }
  const { login } = useAuth()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    console.log('event.currentTarget.value', event.currentTarget.elements)
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    // getLogin({ username, password })
    login({ username, password })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={'username'}></input>
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="text" id={'password'}></input>
      </div>
      <button type={'submit'}>登录</button>
    </form>
  )
}
