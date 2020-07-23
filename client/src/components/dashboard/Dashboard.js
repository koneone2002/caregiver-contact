import React, { Fragment, useContext, useEffect } from 'react';

import ProfileContext from '../../context/profile/profileContext';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner';
const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);
  const { user, loadUser } = authContext;
  const { getProfile, profile, loading } = profileContext;
  useEffect(() => {
    loadUser();

    getProfile();

    // eslint-disable-next-line
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome{' '}
        {user && user.name.split(' ').slice(0, 1)}
      </p>
      {profile !== null ? (
        <Fragment>has </Fragment>
      ) : (
        <Fragment>has not</Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
