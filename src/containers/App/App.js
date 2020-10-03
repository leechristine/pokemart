import React, { useState, useEffect } from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Navbar, Shop, Cart } from 'components';
import pokeball from 'images/pokeball.svg';
import history from 'config/history';
import './App.scss';

function App({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <Router history={ history }>
      <div className="app">
        <div className="app-bgr-image">
          <img src={ pokeball } />
        </div>
        {/* Navigation bar */}
        <Navbar
          brand={
            <NavLink className="navbar-item" to="/">shop</NavLink>
          }
          end={
            <NavLink className="navbar-item" to='/cart'>cart ({ cartCount })</NavLink>
          }
        />
        {/* Routed page */}
        <Switch>
          <Route exact path='/' component={ Shop }/>
          <Route exact path='/cart' component={ Cart } />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  };
};

export default connect(mapStateToProps)(App);
