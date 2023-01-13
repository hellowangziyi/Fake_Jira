import { AuthProvider } from './auth'
import { ReactNode } from 'react'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>
}
