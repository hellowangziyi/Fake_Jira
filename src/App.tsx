import { useState } from 'react'
import * as React from 'react'
import { ProjectListScreen } from './screens/project-list'
import './App.css'
import { Login } from './screens/login'
import { useAuth } from './context/auth'
import { AuthViews } from './screens/authViews'
import { UnauthViews } from './screens/unauthViews'

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {user ? <AuthViews></AuthViews> : <UnauthViews></UnauthViews>}
    </div>
  )
}

export default App
