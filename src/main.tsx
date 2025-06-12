import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'; 
import App from './App.tsx'
import { ThemeProvider } from './components/ThemeContext.tsx'; 
// import './App.css';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </StrictMode>,
)
