import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import * as ROUTES from '../routes';

import Landing from './Landing';
import Navigation from './Navigation';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navigation />

          <Route exact path={ROUTES.LANDING} component={Landing} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
