// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { CartProvider } from './CartContext';
import './style.css'; // Import the styles

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
