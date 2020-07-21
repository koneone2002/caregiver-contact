import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { register, errors, clearErrors, isAuthenticated } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dashboard');
    }

    if (errors === 'User already exists') {
      setAlert(errors, 'danger');
      clearErrors();
    }
  }, [errors, isAuthenticated, clearErrors, setAlert, props.history]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const { name, email, password, password2 } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not Match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={onChange}
            // required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
            // required
          />
          <small className='form-text'>
            This site uses Gravatar profile images, to create a profile image,
            visit Gravatar.com
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            // min-length="6"
            value={password}
            onChange={onChange}
            // required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            // min-length="6"
            value={password2}
            onChange={onChange}
            // required
          />
        </div>
        <input type='submit' value='Register' className='btn btn-primary' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};
export default Register;
