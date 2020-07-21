import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import PrivateRoute from './components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <AuthState>
    <AlertState>
      <Router>
        <Fragment>
          <Navbar />

          <Route exact path='/' component={Landing} />
          <div className='container'>
            <Alerts />
            <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AlertState>
  </AuthState>
);

export default App;
