import * as React from 'react'
import { useAuth } from '../../context/auth'
import { LoginScreen } from './login'
import { RegisterScreen } from './register'

export const UnauthViews = () => {
  const [isRegister, setIsRegister] = React.useState(false)

  return (
    <div>
      {isRegister ? (
        <RegisterScreen></RegisterScreen>
      ) : (
        <LoginScreen></LoginScreen>
      )}
      <button onClick={() => setIsRegister(!isRegister)}>
        切换到{isRegister ? '登录' : '注册'}
      </button>
    </div>
  )
}
