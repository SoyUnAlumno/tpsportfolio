import './styles/index.css'
import './i18n';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/components/templates/app/App'
// import i18n (needs to be bundled ;)) 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
