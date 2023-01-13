import { User } from '../screens/project-list/searchPanel'
import { API } from './axios'

const TOKEN_NAME = 'jira_token'

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_NAME)
}

export const setToken = ({ user }: { user: User }) => {
  window.localStorage.setItem(TOKEN_NAME, user.token || '')
  return user
}

export const logout = () => window.localStorage.removeItem(TOKEN_NAME)

export const login = async (data: { username: string; password: string }) => {
  return API.post(`http://127.0.0.1:4523/m1/1705926-0-default/login`, {
    data
  }).then((res) => {
    if (res.status === 200) {
      return setToken(res.data)
    } else {
      return Promise.reject(data)
    }
  })
}

export const register = async (data: {
  username: string
  password: string
}) => {
  return API.post(`http://127.0.0.1:4523/m1/1705926-0-default/register`, {
    data
  }).then((res) => {
    if (res.status === 200) {
      return setToken(res.data)
    } else {
      return Promise.reject(data)
    }
  })
}
