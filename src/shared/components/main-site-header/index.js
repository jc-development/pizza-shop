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
      <MainNav activeMainNav={activeMainNav} />
      <ElevatorPitchNav activeMainNav={activeMainNav} />
      <CouponCartNav activeMainNav={activeMainNav} />
    </header>
  );
}

const mapStateToProps = ({ navState }) => {
  const { activeMainNav } = navState;
  return { activeMainNav };
};

export default connect(mapStateToProps)(MainSiteHeader);
