import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CartItemCard } from 'components';
import './CartItems.scss';

function CartItems({ cart }) {
  const isCartEmpty = (cart.length === 0);

  return (
    <div className="cart-items-container">
      {isCartEmpty &&
        <div className="empty-cart-action">
          <div className="action-dialogue">Your cart is empty!</div>
          <NavLink className="action-link" to='/'>
            <FontAwesomeIcon className="action-link-icon" icon={ faCartArrowDown } />
            <div className="action-link-text">Start Shopping</div>
          </NavLink>
        </div>
      }
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
