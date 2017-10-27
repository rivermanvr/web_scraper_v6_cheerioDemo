import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navBar';
import Home from './home';

export default function AppContainer() {
  return (
    <div className="container-fluid">
      <h2>Web-Scraping Demo</h2>
      <Route render={ (router) => <Navbar router={ router } /> } />
      <Switch>
      <Route exact path="/home" component={ Home } />
    </Switch>
    </div>
  )
}

/*
      <Switch>
      <Route exact path="/student" component={ Students } />
      <Route
        path="/campus/:id" render={ (router) => <Campus router={ router } /> }
      />
      <Route
        path="/student/:id" render={ (router) => <Student router={ router } /> }
      />
      <Route
        path="/" component={ Campuses } />
    </Switch>
*/
