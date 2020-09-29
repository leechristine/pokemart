import React from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom';

import { Navbar, Shop, Cart } from 'components';
import history from 'config/history';
import './App.scss';

function App() {
  return (
    <Router history={ history }>
      <div className="app">
        {/* Navigation bar */}
        <Navbar
          brand={
            <NavLink className="navbar-item" to="/">shop</NavLink>
          }
          end={
            <NavLink className="navbar-item" to='/cart'>cart</NavLink>
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

export default App;
