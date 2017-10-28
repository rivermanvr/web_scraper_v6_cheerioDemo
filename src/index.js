import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import AppContainer from './components/app';

ReactDOM.render(
    <Router>
      <AppContainer />
    </Router>,
  document.getElementById('root'));
