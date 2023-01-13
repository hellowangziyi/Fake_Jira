/* eslint-disable react/no-children-prop */
import React, { useContext } from 'react'
import { ReactNode } from 'react'
import * as auth from '../utils/auth'
import { User } from '../screens/project-list/searchPanel'

interface AuthForm {
  username: string
  password: string
}
const AuthContext = React.createContext<
  | {
      user: User | null
      login: (form: AuthForm) => Promise<void>
      register: (form: AuthForm) => Promise<void>
      logout: () => void
    }
  | undefined
>(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null)
  const login = (form: AuthForm) =>
    auth.login(form).then((user) => setUser(user))
  const register = (form: AuthForm) => auth.register(form).then(setUser)
  const logout = () => auth.logout()

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register }}
      children={children}
    ></AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth必须在AuthProvider中使用')
  }
  return context
}
