import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { Shop, Cart } from 'components';
import history from 'config/history';
import './App.scss';

function App() {
  return (
    <Router history={ history }>
      <div className="app">
        <Switch>
          <Route exact path='/' component={ Shop }/>
          <Route exact path='/cart' component={ Cart } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
