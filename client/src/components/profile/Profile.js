import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import ProfileContext from '../../context/profile/profileContext';
import AuthContext from '../../context/auth/authContext';

const Profile = ({ match }) => {
  const profileContext = useContext(ProfileContext);
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  const { getProfileById, profile, clearProfile, loading } = profileContext;

  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-light'>
            Back To Profiles
          </Link>
          {isAuthenticated &&
            authContext.loading === false &&
            authContext.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
