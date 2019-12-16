import React, { useEffect, useState } from 'react';
import { TimelineMax } from 'gsap';

export const useSecondaryMenuTL = (menuRef) => {
  const [ tl, setTl ] = useState( new TimelineMax({ paused: true }) );

  useEffect(() => {
    tl
      .to(
        menuRef.current,
        0.5,
        { top: '0%', onComplete: () => console.log('onComplete') }
      )
  }, []);

  return tl;
};
