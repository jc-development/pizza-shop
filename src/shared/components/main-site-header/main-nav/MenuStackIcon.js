import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { openSecondaryNav } from '../../../actions/secondaryNavActions';
import { useMenuStackTL } from './assets/utils/menuStackAnimations';

import './assets/css/menu-stack-icon.css';

const MenuStackIcon = (props) => {

  const topLineRef = useRef();
  const middleLineRef = useRef();
  const bottomLineRef = useRef();

  const [ menuOpen, setMenuOpen ] = useState(false);

  const tl = useMenuStackTL({ topLineRef, middleLineRef, bottomLineRef });

  useEffect(() => {
    menuOpen ? tl.play() : tl.reverse();
    props.openSecondaryNav(menuOpen);
  }, [menuOpen]);

  return (
      <svg onClick={ () => setMenuOpen(!menuOpen) } id="secondary-menu-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
      <line ref={ topLineRef } className="hamburger-line" y1="5" x2="28" y2="5" />
      <line ref={ middleLineRef } className="hamburger-line" y1="12" x2="28" y2="12" />
      <line ref={ bottomLineRef } className="hamburger-line" y1="19" x2="28" y2="19" />
    </svg>
  );
};

const mapStateToProps = ({ secondaryNavState }) => {
  const { isOpen } = secondaryNavState;
  return { isOpen };
}

export default connect(mapStateToProps, { openSecondaryNav })(MenuStackIcon);
