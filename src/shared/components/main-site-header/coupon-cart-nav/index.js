import React from 'react';
import { Link } from 'react-router-dom';
import isActive from '../assets/utils/isActive';

import './assets/css/coupon-cart-nav.css';


const CouponCartNav = props => {
  const passLink = passedLink => props.activeMainNav !== null ? isActive({ linkName: passedLink, activeLinkRedux: props.activeMainNav }) : null;

  return (
    <nav className="main-header-end">
      <ul>
        <li><Link to="/coupons" className={ passLink('coupons') }>coupons</Link></li>
        <li><Link to="/cart" className={ passLink('cart') }>cart</Link></li>
      </ul>
    </nav>
  );
};

export default CouponCartNav;
