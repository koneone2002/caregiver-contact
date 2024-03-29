import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ProfileContext from '../../context/profile/profileContext';

const Navbar = props => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearProfile } = profileContext;
  const onLogout = () => {
    clearProfile();
    logout();
  };
  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name} </li>
      <li>
        <Link to='/profiles'>Caregivers</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>

      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/profiles'>Caregivers</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );
  return (
    <li className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i>Caregiver Connector
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </li>
  );
};

export default Navbar;
