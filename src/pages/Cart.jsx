import React from 'react';
import { useEffect, useState } from 'react';
import './Cart.scss';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)} × {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2 className="cart-total">Total: ${total.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}
