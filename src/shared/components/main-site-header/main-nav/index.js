import React from 'react';
import { Link } from 'react-router-dom';
import isActive from '../assets/utils/isActive';
import MenuStackIcon from './MenuStackIcon'

import './assets/css/main-nav.css';

const MainNav = (props) => {

  const passLink = passedLink => props.activeMainNav !== null ? isActive({ linkName: passedLink, activeLinkRedux: props.activeMainNav }) : null;

  return (
    <nav id="main-nav">
      <ul>
        <li><Link to="/" className={props.isOpen ? 'black' : null} >Pizza's<br/>Pizzeria</Link></li>
        <li><MenuStackIcon isOpen={props.isOpen} /></li>
      </ul>
    </nav>
  );
};

export default MainNav;

// { passLink('home') }
