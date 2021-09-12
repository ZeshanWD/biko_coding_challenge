import React from 'react';

import flor from '../resources/img/flor.png'

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={flor} alt="logo flor" style={{ height: '30px', marginRight: '10px' }} className="d-inline-block align-text-top" />
            Floristería Dulces Pétalos
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
