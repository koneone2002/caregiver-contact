import React, { Fragment, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../../context/profile/profileContext';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';

const Profiles = props => {
  const profileContext = useContext(ProfileContext);
  const { clearProfiles, getProfiles, profiles, loading } = profileContext;

  useEffect(() => {
    clearProfiles();
    getProfiles();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Caregivers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i> Browse and connect with
            caregivers
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No Profiles found</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func,
  profile: PropTypes.object
};

export default Profiles;
