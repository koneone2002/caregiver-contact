import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import EditProfile from './components/profile-forms/EditProfile';
import CreateProfile from './components/profile-forms/CreateProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Register from './components/auth/Register';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import AuthState from './context/auth/AuthState';
import ProfileState from './context/profile/ProfileState';
import AlertState from './context/alert/AlertState';
import PostState from './context/post/PostState';
import PrivateRoute from './components/routing/PrivateRoute';
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
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/profiles' component={Profiles} />
                  <Route exact path='/profile/:id' component={Profile} />
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />

                  <PrivateRoute
                    exact
                    path='/create-profile'
                    component={CreateProfile}
                  />
                  <PrivateRoute
                    exact
                    path='/edit-profile'
                    component={EditProfile}
                  />
                  <PrivateRoute
                    exact
                    path='/add-experience'
                    component={AddExperience}
                  />
                  <PrivateRoute
                    exact
                    path='/add-education'
                    component={AddEducation}
                  />
                  <PrivateRoute exact path='/posts' component={Posts} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </PostState>
      </AlertState>
    </ProfileState>
  </AuthState>
);

export default App;
