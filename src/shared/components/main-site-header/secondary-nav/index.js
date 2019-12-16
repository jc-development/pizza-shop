import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

  const tl = useSecondaryMenuTL(menuRef);

  useEffect(() => {
    props.isOpen ? tl.play() : tl.reverse();
  }, [props.isOpen]);

  const hyphenate = str => str.replace( / /g, "-" );

  const listItems = arr => arr.map( title => listGroups(Object.keys(title), Object.values(title)) );

  const listGroups = (groupTitleArr, groupItemsArr) => groupTitleArr.map( (groupTitle, t) => <dl key={t}><dt>{groupTitle}</dt>{listGroupItems(groupTitle, groupItemsArr) }</dl> );

  const listGroupItems = (title, arr) => arr.map( (items, i) => items.map( (item, i) => <dd key={i}><Link to={ `\/${hyphenate(title)}\/${hyphenate(item)}` }>{item}</Link></dd>) );

  return (
    <nav ref={menuRef} className="full-page-nav">
      <div>
      <ul><li><Link to="/menu">full menu</Link></li></ul>
      { listItems(items) }
      </div>
    </nav>
  );
};

const mapStateToProps = ({ secondaryNavState }) => {
  const { isOpen } = secondaryNavState;
  return { isOpen };
};

export default connect(mapStateToProps)(SecondaryNav);
