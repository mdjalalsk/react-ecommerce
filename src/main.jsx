import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from './Context/Filter_context.jsx'
import { CartProvider } from "./context/cart_context";

// import { FilterContextProvider } from "./context/filter_context";





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AppProvider>
      <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>,
);
reportWebVitals();
