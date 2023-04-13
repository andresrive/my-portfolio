import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ModalProvider } from './context/modal.context'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/theme.context'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)
