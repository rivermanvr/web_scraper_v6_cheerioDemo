import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navBar';
import Home from './home';
import Indeed from './indeed';

export default function AppContainer() {
  return (
    <div className="container-fluid">
      <h2 className="marginB">Web-Scraping Demo</h2>
      <Route render={ (router) => <Navbar router={ router } /> } />
      <Switch>
        <Route exact path="/home" component={ Home } />
        <Route exact path="/indeed" component={ Indeed } />
        <Route path="/" component={ Home } />
      </Switch>
    </div>
  )
}
