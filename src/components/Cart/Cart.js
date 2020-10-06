import React from 'react';

import { CartItems, Checkout } from 'components';
import './Cart.scss';

function Cart() {
  return (
    <div className="cart-container">
      <Checkout />
      <CartItems />
    </div>
  );
}

export default Cart;
