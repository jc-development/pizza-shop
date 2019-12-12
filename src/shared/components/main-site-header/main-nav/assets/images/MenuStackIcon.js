import React, { createRef, useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { setSecondaryNavState } from './../../../../actions/shared-ui-actions';
// import { hamburgerIconTimelineFwd, hamburgerIconTimelineRev, tweenStrokeColor } from '../../../../utilities/tweens/color-tween';

import './../css/menu-stack-icon.css';

const MenuStackIcon = (props) => {

  const topLineRef = createRef();
  const middleLineRef = createRef();
  const bottomLineRef = createRef();

  const [showSecondaryMenu, setShowSecondaryMenu] = useState(false);
  const [color, setColor] = useState('dark');

  // useEffect(() => {
  //   if (props.sharedUiState.secondaryMenuVisible) {
  //     setColor('dark');
  //   } else {
  //     setColor(props.colorTheme);
  //   }
  // });

  // useEffect(() => {
  //   tweenStrokeColor( color, [topLineRef.current, middleLineRef.current, bottomLineRef.current] );
  // }, [color]);
  //
  // useEffect(() => {
  //   const playAnimationFwd = () => {
  //     const tlFwd = hamburgerIconTimelineFwd(topLineRef.current, middleLineRef.current, bottomLineRef.current);
  //     tlFwd.play();
  //   };
  //
  //   const playAnimationRev = () => {
  //     const tlRev = hamburgerIconTimelineRev(topLineRef.current, middleLineRef.current, bottomLineRef.current);
  //     tlRev.play();
  //   };
  //
  //   showSecondaryMenu ? playAnimationFwd() : playAnimationRev();
  //   props.setSecondaryNavState(showSecondaryMenu);
  //
  // }, [showSecondaryMenu, props.sharedUiState.secondaryMenuVisible]);

  const handleClick = () =>  console.log('clicked'); //setShowSecondaryMenu(!showSecondaryMenu);

  return (
      <svg onClick={() => handleClick()} id="secondary-menu-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
      <line ref={ topLineRef } className="hamburger-line" y1="5" x2="28" y2="5" />
      <line ref={ middleLineRef } className="hamburger-line" y1="12" x2="28" y2="12" />
      <line ref={ bottomLineRef } className="hamburger-line" y1="19" x2="28" y2="19" />
    </svg>
  );
};

export default MenuStackIcon;

// const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
// export default connect(mapStateToProps, { setSecondaryNavState })(SecondaryMenuIcon)
