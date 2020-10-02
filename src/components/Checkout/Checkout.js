import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import './Checkout.scss';

function Checkout({ cart }) {
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.quantity * item.price;
    });

    setCartSubtotal(subtotal);

    let total = subtotal;
    setCartTotal(total);
  }, [cart, cartTotal, cartSubtotal]);

  return (
    <div className="checkout-container">
      <div className="checkout-title">Cart Summary</div>
      <div className="checkout-summary">
        <div className="checkout-subtotal">
          <div className="label">Subotal</div>
          <div className="amount">¥{ cartSubtotal }</div>
        </div>
      </div>
      <div className="checkout-total">
        <div className="label">Total</div>
        <div className="amount">¥{ cartTotal }</div>
      </div>
      <div className="checkout-actions">
        <button>checkout</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  };
};

export default connect(mapStateToProps)(Checkout);
