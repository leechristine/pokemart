import React from 'react';

import { CartItems } from 'components';
import './Cart.scss';

function Cart() {
  return (
    <div className="cart-container">
      <CartItems />
    </div>
  );
}

export default Cart;
