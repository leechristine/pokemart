import React from 'react';

import './Navbar.scss';

function Navbar(props) {
    return (
      <div className="navbar-container">
        <div className="navbar-start">
          <div className="navbar-brand">
            { props.brand }
          </div>
          <div className="navbar-menu">
            { props.menu }
          </div>
        </div>
        <div className="navbar-end">
          { props.end }
        </div>
      </div>
    );
  }

export default Navbar;