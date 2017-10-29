import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navBar';
import SearchBar from './search_bar';
import Home from './home';
import useCase from './use_case';
import MVP from './mvp';
import Future from './future';

export default function AppContainer() {
  return (
    <div className="container-fluid">
      <h2 className="marginB">Web-Scraping Demo</h2>
      <Route render={ (router) => <Navbar router={ router } /> } />
      <Switch>
        <Route exact path="/mvp" component={ SearchBar } />
      </Switch>
      <Switch>
        <Route exact path="/home" component={ Home } />
        <Route exact path="/useCase" component={ useCase } />
        <Route exact path="/mvp" component={ MVP } />
        <Route exact path="/future" component={ Future } />
        <Route path="/" component={ Home } />
      </Switch>
    </div>
  )
}
