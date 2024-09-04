import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { VazquezProvider } from './context/VazquezContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <VazquezProvider>

        <App />
      </VazquezProvider>


    </BrowserRouter>
  </StrictMode>,
)
