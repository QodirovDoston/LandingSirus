import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'windi.css'
import './index.css'
import "./i18n/i18n"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
)