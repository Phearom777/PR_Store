import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// 👉 Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartProvider } from './pages/CartContext.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Initialize AOS
AOS.init();

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
)
