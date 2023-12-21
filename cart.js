// Cart.js
import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, updateQuantity } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>Price: ${item.price}</div>
            <div>
              Quantity:
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              {item.quantity}
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <div>Total: ${item.price * item.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
