import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadSecondaryNavLinkVideo } from '../../../actions/secondaryNavActions';
import { useSecondaryMenuTL } from './assets/utils/secondaryNavAnimations';

import './assets/css/secondary-nav.css';

const items = [
  {
    "pizzas": [
      "focaccia",
      "napolitan",
      "sicilian",
      "white"
    ]
  },
  {
    "hot subs": [
      "sausage",
      "eggplant parm",
      "chicken parm",
      "steak",
      "meatball"
    ]
  },
  {
    "wings": [
      "buffalo",
      "barbeque",
      "sweet and sour"
    ]
  }
];


const SecondaryNav = props => {
  const menuRef = useRef();
  const videoRef = useRef();

  const tl = useSecondaryMenuTL(menuRef);

  useEffect(() => {
    props.isOpen ? tl.play() : tl.reverse();
  }, [props.isOpen]);

  useEffect(() => {
    if (props.secondaryNavVideo !== null) {
      const startPlayback = videoRef.current.play();

      startPlayback
        .then(
          () => console.log('video can play')
        )
        .catch(
          error => console.log('error: ', error)
        );
    }
  }, [props.secondaryNavVideo]);

  const hyphenate = str => str.replace( / /g, "-" );

  const listItems = arr => arr.map( title => listGroups(Object.keys(title), Object.values(title)) );

  const listGroups = (groupTitleArr, groupItemsArr) => groupTitleArr.map( (groupTitle, t) => <dl key={t}><dt>{groupTitle}</dt>{listGroupItems(groupTitle, groupItemsArr) }</dl> );

  const handleHover = (item) => props.loadSecondaryNavLinkVideo(item);

  const listGroupItems = (title, arr) => arr.map( (items, i) => items.map( (item, i) => <dd key={i}><Link onMouseEnter={() => handleHover( hyphenate(item) )} onMouseLeave={() => handleHover(null)} to={ `\/${hyphenate(title)}\/${hyphenate(item)}` }>{item}</Link></dd>) );

  const displayVideo = () => props.secondaryNavVideo === null ?
      null
    :
    (
      <video ref={videoRef} muted>
        <source src="https://elite-website.s3.amazonaws.com/2020/kure/videos/top-bottom.mp4" /> // change this to accept a prop so becomes dynamic; PLACEHOLDER for now
      </video>
    );

  return (
    <nav ref={menuRef} className="full-page-nav">
      { displayVideo() }
      <div>
      { listItems(items) }
      <ul>
        <li><Link onMouseEnter={() => handleHover(null)} to="/menu">full menu</Link></li>
        <li><Link onMouseEnter={() => handleHover(null)} to="/coupons">coupons</Link></li>
        <li><Link onMouseEnter={() => handleHover(null)} to="/menu">cart</Link></li>
      </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ secondaryNavState }) => {
  const { isOpen, secondaryNavVideo } = secondaryNavState;
  return { isOpen, secondaryNavVideo };
};

export default connect(mapStateToProps, { loadSecondaryNavLinkVideo })(SecondaryNav);
