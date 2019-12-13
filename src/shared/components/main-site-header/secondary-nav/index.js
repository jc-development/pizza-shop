import React from 'react';
import { Link } from 'react-router-dom';

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


const SecondaryNav = () => {

  const hyphenate = str => str.replace( / /g, "-" );

  const listItems = arr => arr.map( title => listGroups(Object.keys(title), Object.values(title)) );

  const listGroups = (groupTitleArr, groupItemsArr) => groupTitleArr.map( (groupTitle, t) => <dl key={t}><dt>{groupTitle}</dt>{listGroupItems(groupTitle, groupItemsArr) }</dl> );

  const listGroupItems = (title, arr) => arr.map( (items, i) => items.map( (item, i) => <dd key={i}><Link to={ `\/${hyphenate(title)}\/${hyphenate(item)}` }>{item}</Link></dd>) );

  return (
    <nav className="full-page-nav">
      <div>
      <ul><li><Link to="/menu">full menu</Link></li></ul>
      { listItems(items) }
      </div>
    </nav>
  );
};

export default SecondaryNav;
