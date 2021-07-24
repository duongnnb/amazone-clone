import React from 'react';
import './styles/header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { useStateValue } from '../../context/global';
import { auth } from '../../lib/firebase';

function Header() {
  const history = useHistory();
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } else {
      history.push(ROUTES.SIGN_IN);
    }
  };

  return (
    <div className="header">
      <Link to={ROUTES.HOME}>
        <img className="header__logo" src="/images/amazon.png" alt="" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option" onClick={handleAuthentication}>
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign in'}</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne"> Returns</span>
          <span className="header__optionLineTwo"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne"> Your</span>
          <span className="header__optionLineTwo"> Prime</span>
        </div>
        <Link to={ROUTES.CHECKOUT}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
