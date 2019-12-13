import React, { useEffect, useState } from 'react';
import { TimelineMax } from 'gsap';

export const useMenuStackTL = ({topLineRef, middleLineRef, bottomLineRef}) => {

  const [ tl, setTl ] = useState( new TimelineMax({ paused: true }) )

  useEffect(() => {
    tl
      .to(
        topLineRef.current,
        0.5,
        { x: 0, y: 7, rotation: 45 }
      )
      .to(
        bottomLineRef.current,
        0.5,
        { x: 0, y: -7, rotation: -45 },
        0
      )
      .to(
        middleLineRef.current,
        0.5,
        { autoAlpha: 0 },
        0
      );
  }, []);

  return tl;
};
