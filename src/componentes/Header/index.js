import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header center">
        <picture>
          <img src="./assets/logo.png" alt="Gelateria" />
        </picture>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sabores">Sabores</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
