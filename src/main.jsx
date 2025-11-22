import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import App from './App'
=======
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
>>>>>>> cbe9ce76336f1f440f848b455fc65391744bac81
import './index.css'

import './output.css';
import { BrowserRouter } from 'react-router-dom';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
    
  </StrictMode>,
)
