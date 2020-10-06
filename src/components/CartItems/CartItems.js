import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { emptyCart } from 'actions/shop';
import { CartItemCard } from 'components';
import './CartItems.scss';

function CartItems({ cart, emptyCart }) {
  const isCartEmpty = (cart.length === 0);

  return (
    <div className="cart-items-container">
      {cart.map(cartItem => (
        <div className="product-container">
          <CartItemCard key={cartItem.id} productData={ cartItem } />
        </div>
      ))}
      {isCartEmpty
        ? <div className="to-shop-action">
            <div className="action-dialogue">Your cart is empty!</div>
            <NavLink className="action-link" to='/'>
              <FontAwesomeIcon className="action-link-icon" icon={ faCartArrowDown } />
              <div className="action-link-text">Start Shopping</div>
            </NavLink>
          </div>
        : <div className="empty-cart-action" onClick={() => emptyCart()}>empty cart</div>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => dispatch(emptyCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
