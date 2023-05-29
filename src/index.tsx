import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from 'react-redux';
import store from "../src/components/store";
import Routes from './Routes';
import './index.css';
import App from './App';
import NavbarNavigatio from './Navbar/NavbarNavigatio';
import Footer from './Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NavbarNavigatio />
          <App />
          <Routes />
          <Footer />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
