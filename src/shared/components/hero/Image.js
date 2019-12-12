import React from 'react';

const Image = props => {
  const { src, alt, figcaption } = props.content;

  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{figcaption}</figcaption>
    </figure>
  );
};

export default Image;
