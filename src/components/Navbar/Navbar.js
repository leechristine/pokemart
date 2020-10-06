import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { faStore, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Navbar.scss';

function Navbar({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="navbar-container">
      <div className="navbar-start">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            <FontAwesomeIcon className="navbar-item-icon" icon={ faStore } />
            <div className="navbar-item-text">&nbsp;Poké Mart</div>
          </NavLink>
        </div>
        <div className="navbar-menu">
        </div>
      </div>
      <div className="navbar-end">
        <NavLink className="navbar-item" to='/cart'>
          <FontAwesomeIcon className="navbar-item-icon" icon={ faShoppingCart } />
          <div className="navbar-item-text">&nbsp;{ cartCount }</div>
        </NavLink>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  };
};

export default  connect(mapStateToProps)(Navbar);