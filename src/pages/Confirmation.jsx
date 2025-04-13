import React from 'react';
import { Link } from 'react-router-dom';
import './Confirmation.scss';

export default function Confirmation() {
  return (
    <div className="confirmation-page">
      <h1>Thank you for your order!</h1>
      <p>Your miniatures are being packed by our goblin couriers and will be delivered by 2 african sparrows</p>
      <Link to="/shop" className="back-btn">Continue Shopping</Link>
    </div>
  );
}
