import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import loadable from '@loadable/component';

const MainNav = loadable( () => import('./main-nav') );
const ElevatorPitchNav = loadable(() => import('./elevator-pitch-nav') );
const CouponCartNav = loadable( () => import('./coupon-cart-nav') );


const MainSiteHeader = props => {
  const [activeMainNav, setActiveMainNav] = useState(null);

  useEffect(
    () => {
      setActiveMainNav(props.activeMainNav);
    }, [props.activeMainNav]
  );

  return (
    <header className="fixed-100w thirds-equal z-index-5">
      <MainNav activeMainNav={activeMainNav} isOpen={props.isOpen} />
      <ElevatorPitchNav activeMainNav={activeMainNav} isOpen={props.isOpen} />
      <CouponCartNav activeMainNav={activeMainNav} isOpen={props.isOpen} />
    </header>
  );
}

const mapStateToProps = ({ navState, secondaryNavState }) => {
  const { activeMainNav } = navState;
  const { isOpen } = secondaryNavState;
  return { activeMainNav, isOpen };
};

export default connect(mapStateToProps)(MainSiteHeader);
