import React from 'react';
import loadable from '@loadable/component';

import './assets/css/hero.css';

const HeroTitle = loadable( () => import('./HeroTitle') );

const Hero = props => {

  const { heroTitle } = props.content;

  const loadMedia = content => {
    if (content.video) {
      const { video } = content;
      const Video = loadable( () => import('./Video') );
      return <Video content={video} />;
    } else {
      const { image } = content;
      const Image = loadable( () => import('./Image') );
      return <Image content={image} />;
    }
  };

  return (
    <article className="hero">
      <HeroTitle content={heroTitle} />
      { loadMedia(props.content) }
    </article>
  );
};

export default Hero;
