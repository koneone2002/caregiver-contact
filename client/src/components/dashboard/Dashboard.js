import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileContext from '../../context/profile/profileContext';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { user, loadUser, accountDeleted } = authContext;
  const { getProfile, profile, loading, deleteAccount } = profileContext;
  useEffect(() => {
    loadUser();

    getProfile();

    // eslint-disable-next-line
  }, [loadUser, getProfile]);
  const onClick = () => {
    deleteAccount();
    setAlert('Account deleted');
    accountDeleted();
  };
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
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className='my-2'>
            <button className='btn btn-danger' onClick={onClick}>
              <i className='fas fa-user-minus'></i> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
