import React from 'react';

import './Checkout.scss';

function Checkout() {
  return (
    <div className="checkout-container">
      <div className="checkout-title">Order Summary</div>
      <div className="checkout-summary">
        <div className="checkout-subtotal">
          <div className="label">Subotal</div>
          <div className="amount"></div>
        </div>
      </div>
      <div className="checkout-total">
        <div className="label">Total</div>
        <div className="amount"></div>
      </div>
      <div className="checkout-actions">
        <button>checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
