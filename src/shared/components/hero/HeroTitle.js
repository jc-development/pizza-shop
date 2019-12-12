import React from 'react';

const HeroTitle = props => {
  const { main, supporting } = props.content;

  return (
    <header>
      <h6>{supporting}</h6>
      <h1>{main}</h1>
    </header>
  );
};

export default HeroTitle;
