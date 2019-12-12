import React from 'react';
import { Link } from 'react-router-dom';
import isActive from '../assets/utils/isActive';
import MenuStackIcon from './assets/images/MenuStackIcon'

import './assets/css/main-nav.css';

const MainNav = (props) => {

  const passLink = passedLink => props.activeMainNav !== null ? isActive({ linkName: passedLink, activeLinkRedux: props.activeMainNav }) : null;

  return (
    <nav id="main-nav">
      <ul>
        <li><Link to="/" className={ passLink('home') }>Pizza's<br/>Pizzeria</Link></li>
        <li><MenuStackIcon /></li>
      </ul>
    </nav>
  );
};

export default MainNav;
