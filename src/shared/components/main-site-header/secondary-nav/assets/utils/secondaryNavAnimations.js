import React, { useEffect, useState } from 'react';
import { TimelineMax } from 'gsap';

export const useSecondaryMenuTL = (menuRef) => {
  const [ tl, setTl ] = useState( new TimelineMax({ paused: true }) );

  useEffect(() => {
    tl
      .to(
        menuRef.current,
        0.25,
        { top: '0%', autoAlpha: 1, onComplete: () => console.log('onComplete') }
      )
  }, []);

  return tl;
};
