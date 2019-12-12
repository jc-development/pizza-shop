import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import './assets/css/reset.css';
import './assets/css/site-wide.css';

const MainSiteHeader = loadable( () => import('./../components/main-site-header') );

const App = props => {
  return (
    <>
      <MainSiteHeader />
      <Switch>
        <Route exact path="/" component={ loadable( () => import('./Home') ) } />
        <Route path="/pizzas" component={ loadable( () => import('./Pizzas') ) } />
      </Switch>
    </>
  );
}

export default App;
