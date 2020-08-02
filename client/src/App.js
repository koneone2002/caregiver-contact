import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Routes from './components/routing/Routes';
import AuthState from './context/auth/AuthState';
import ProfileState from './context/profile/ProfileState';
import AlertState from './context/alert/AlertState';
import PostState from './context/post/PostState';

import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <AuthState>
    <ProfileState>
      <AlertState>
        <PostState>
          <Router>
            <Fragment>
              <Navbar />
              <Route exact path='/' component={Landing} />
              <Routes component={Routes} />
            </Fragment>
          </Router>
        </PostState>
      </AlertState>
    </ProfileState>
  </AuthState>
);

export default App;
