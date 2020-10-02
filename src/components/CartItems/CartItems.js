import React from 'react';
import { connect } from 'react-redux';

import { CartItemCard } from 'components';
import './CartItems.scss';

function CartItems({ cart }) {
  return (
    <div className="cart-items-container">
      {cart.map(cartItem => (
        <div className="product-container">
          <CartItemCard key={cartItem.id} productData={ cartItem } />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(CartItems);
