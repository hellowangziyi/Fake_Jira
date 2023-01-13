import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProviders } from './context'
// import { loadDevTools } from 'jira-dev-tool'

// loadDevTools(() => ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   document.getElementById('root')
// ))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
)
