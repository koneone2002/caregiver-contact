import React, { useContext, useEffect } from 'react';

import ProfileContext from '../../context/profile/profileContext';
import AuthContext from '../../context/auth/authContext';
const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);
  const { user } = authContext;
  const { getProfile, profile } = profileContext;
  useEffect(() => {
    authContext.loadUser();
    getProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <section className='container'>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome{' '}
        {user && user.name.split(' ').slice(0, 1)}
      </p>
    </section>
  );
};

export default Dashboard;
