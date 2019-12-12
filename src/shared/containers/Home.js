import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { updateNav } from '../actions/navActions';
// import pizzaImage from './assets/images/pizza-pic.jpg';

import loadable from '@loadable/component';

const content = {
  heroContent: {
    // video: {
    //   src: "https://elite-website.s3.amazonaws.com/2020/kure/videos/top-bottom.mp4",
    //   poster: "http://elite-website.s3.amazonaws.com/2020/kure/videos/top-bottom-poster.jpg",
    //   caption: "A test video"
    // },
    image: {
      src: "https://via.placeholder.com/468x60?text=Large+Pizza+Image",
      alt: "a lovely pizza",
      figcaption: "a lovely pizza"
    },
    heroTitle: {
      main: "main hero title",
      supporting: "supporting title"
    }
  },
};

const Hero = loadable( () => import('../components/hero') );

const Home = props => {

  const { heroContent } = content;

  useEffect(
    () => {
      props.updateNav(props.match.path);
    }, []
  );

  return (
    <>
      <Helmet>
        <title>Pizza's Pizzeria The best home made artisinal pizzas. The best sicilian pizzas, focaccia pizzas, napolitan pizzas, and gourmet pizzas in Rochester, NY. Call 555-555-5555 to place your order!</title>
      </Helmet>
      <Hero content={heroContent} />
    </>
  );
};

const mapStateToProps = ({ navState }) => {
  const { activeNav } = navState;
  return { activeNav };
};

export default connect(mapStateToProps, { updateNav })(Home);
