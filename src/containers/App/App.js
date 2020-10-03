import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { Navbar, Shop, Cart } from 'components';
import pokeball from 'images/pokeball.svg';
import history from 'config/history';
import './App.scss';

function App() {
  return (
    <Router history={ history }>
      <div className="app">
        <div className="app-bgr-image">
          <img src={ pokeball } />
        </div>
        {/* Navigation bar */}
        <Navbar />
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
