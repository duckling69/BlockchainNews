import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom'
import AnimCursor from './components/AnimCursor';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-h8t8mfag6tjhntcr.us.auth0.com"
      clientId="s1JR5rnZZvEDCoDja9S2EK1ETNZLque2"
      redirectUri={window.location.origin}
    >

      <BrowserRouter>
        <AnimCursor/>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
