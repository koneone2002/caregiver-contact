import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProfileContext from '../../context/profile/profileContext';
import AlertContext from '../../context/alert/alertContext';
const CreateProfile = props => {
  const [formData, setFormData] = useState({
    email: '',
    location: '',
    contact: '',
    status: '',
    skills: '',
    bio: ''
  });

  const { email, location, contact, status, skills, bio } = formData;
  const profileContext = useContext(ProfileContext);
  const alertContext = useContext(AlertContext);
  const { addProfile, profile } = profileContext;
  const { setAlert } = alertContext;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '') {
      setAlert('Please enter an email address', 'danger');
    } else {
      addProfile(formData);
      //console.log(formData);
      setAlert('Form Submitted', 'success');
      props.history.push('/dashboard');
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required fields</small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={onChange}
            />
            <small className='form-text'>*Contact email</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Location'
              name='location'
              value={location}
              onChange={onChange}
            />
            <small className='form-text'>What's the general vicinity?</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Contact'
              name='contact'
              value={contact}
              onChange={onChange}
            />
            <small className='form-text'>Kaiser Contact</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Availability'
              name='status'
              value={status}
              onChange={onChange}
            />
            <small className='form-text'>When are you available?</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='* Skills'
              name='skills'
              value={skills}
              onChange={onChange}
            />
            <small className='form-text'>
              Please use comma separated values (eg. tutoring, sitting,
              teaching)
            </small>
          </div>

          <div className='form-group'>
            <textarea
              placeholder='A short bio of yourself'
              name='bio'
              value={bio}
              onChange={onChange}
            ></textarea>
            <small className='form-text'>Tell us a little about yourself</small>
          </div>
        </div>
        <input
          type='submit'
          value='Add Profile'
          className='btn btn-primary my-1'
        />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default CreateProfile;
