import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navBar';
import SearchBar from './search_bar';
import Home from './home';
import useCase from './use_case';
import MVP from './mvp';
import Future from './future';

export default class AppContainer extends Component {
  constructor() {
    super();
    this.state = { url: '', results: '' };

    this.getUrl = this.getUrl.bind(this);
  }

  getUrl(url) {
    console.log('>>>>>>>  in url function >>>>>>>>>')
    this.setState({ url, results: 'nothing yet' })
    console.log('>>>>>>>>>>>>>>>>')
  }

  render() {
    return (
      <div className="container-fluid">
        <h2 className="marginB">Web-Scraping Demo</h2>
        <Route render={ (router) => <Navbar router={ router } /> } />
        <Switch>
          <Route 
            exact path="/mvp" render={ () =>
              <SearchBar
                getUrl={ this.getUrl }
              />
            }
          />
        </Switch>
        <Switch>
          <Route exact path="/home" component={ Home } />
          <Route exact path="/useCase" component={ useCase } />
          <Route 
            exact path="/mvp" render={ () =>
              <MVP
                state={ this.state }
              />
            }
          />
          <Route exact path="/future" component={ Future } />
          <Route path="/" component={ Home } />
        </Switch>
      </div>
    )
  }
}
