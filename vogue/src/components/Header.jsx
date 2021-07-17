import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import { Nav } from './Nav';
import '../styles/header.scss';


export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => {
  const itemsNav = [
    {
      linkItem: '#',
      item: 'FASHION'
    },
    {
      linkItem: '#',
      item: 'BEAUTY'
    },
    {
      linkItem: '#',
      item: 'CULTURE'
    },
    {
      linkItem: '#',
      item: 'LIVING'
    },
    {
      linkItem: '#',
      item: 'RUNWAY'
    },
    {
      linkItem: '#',
      item: 'SHOPPING'
    },
    {
      linkItem: '#',
      item: 'VIDEO'
    }
  ]

  return (
    <header>
      <div className="header">
        <div className="header-titleSection">
          <img src="logoVogue.svg" alt="Logo" />
        </div>
        <div className="header-optionSection">
          <a href='#'>SIGN IN</a>
          <a href='#'>SUSCRIBE</a>
          <img src="searchIcon.svg" alt="SearchIcon" />
        </div>
      </div>
      <Nav itemsNav={itemsNav} />
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
