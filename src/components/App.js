import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { withFirebase } from '../context';
import { compose } from 'recompose';

import * as ROUTES from '../routes';

import Landing from './Landing';
import Navigation from './Navigation';
import SignUp from './SignUp';
import Login from './Login';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navigation hasAuth={!!this.state.authUser} />

          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.LOGIN} component={Login} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default compose(withFirebase)(App);
