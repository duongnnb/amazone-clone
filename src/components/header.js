import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="/images/amazon.png" alt="" />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
      </div>
      <div className="header__nav"></div>
    </div>
  );
}

export default Header;
