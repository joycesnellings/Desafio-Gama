import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavbarNavigatio from './Navbar/NavbarNavigatio';
import Footer from './Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarNavigatio />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

