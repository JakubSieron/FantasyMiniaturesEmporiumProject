import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import './Cart.scss';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const updateQuantity = (id, amount) => {
    const updated = cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
      .filter(item => item.quantity > 0);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const handleConfirm = () => {
    localStorage.removeItem('cart');
    setCart([]);
    setShowModal(false);
    navigate('/confirmation');
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
              {/* ✅ Fix: require image from filename stored in item.image */}
              <img
                 src={
                  (() => {
                    try {
                      return require(`../assets/images/${item.image}`);
                    } catch {
                      return require(`../assets/images/placeholder.jpg`);
                       // or ''
                    }
                  })()
                }
                alt={item.name}
              />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)} each</p>
                <div className="quantity-buttons">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <h2 className="cart-total">Total: ${total.toFixed(2)}</h2>

          <button className="finish-btn" onClick={() => setShowModal(true)}>
            Checkout
          </button>
        </div>
      )}

      {showModal && (
        <Modal title="Confirm Your Order" onClose={() => setShowModal(false)}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} × {item.quantity} → ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
            Total: ${total.toFixed(2)}
          </p>
          <button
            onClick={handleConfirm}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: '#5e2b97',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Confirm Purchase
          </button>
        </Modal>
      )}
    </div>
  );
}

