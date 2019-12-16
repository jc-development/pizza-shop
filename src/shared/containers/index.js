// import React, { useState, useEffect } from 'react';
import React from 'react';
// import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import './assets/css/reset.css';
import './assets/css/site-wide.css';

const MainSiteHeader = loadable( () => import('./../components/main-site-header') );
const SecondaryNav = loadable( () => import('./../components/main-site-header/secondary-nav') );

const App = props => {

  // const [ showSecondaryNav, setShowSecondaryNav ] = useState(false);

  // useEffect(() => {
  //   setShowSecondaryNav(props.isOpen);
  // }, [props.isOpen]);

  return (
    <>
      <MainSiteHeader />
      <SecondaryNav />
      <Switch>
        <Route exact path="/" component={ loadable( () => import('./Home') ) } />
        <Route path="/pizzas" component={ loadable( () => import('./Pizzas') ) } />
      </Switch>
    </>
  );
}

// const mapStateToProps = ({ secondaryNavState }) => {
//   const { isOpen } = secondaryNavState;
//   return { isOpen };
// };

// export default connect(mapStateToProps)(App);
export default App;

// { showSecondaryNav ? <SecondaryNav /> : null }
