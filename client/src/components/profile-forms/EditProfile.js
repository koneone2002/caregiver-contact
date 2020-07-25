import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileContext from '../../context/profile/profileContext';
import AlertContext from '../../context/alert/alertContext';
const EditProfile = props => {
  const [formData, setFormData] = useState({
    email: '',
    location: '',
    contact: '',
    status: '',
    skills: '',
    bio: ''
  });

  const profileContext = useContext(ProfileContext);
  const alertContext = useContext(AlertContext);
  const { profile, addProfile, getProfile, loading } = profileContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    getProfile();
    console.log(profile);
    setFormData({
      email: loading || !profile.email ? '' : profile.email,
      location: loading || !profile.location ? '' : profile.location,
      contact: loading || !profile.contact ? '' : profile.contact,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills,
      bio: loading || !profile.bio ? '' : profile.bio
    });
  }, [
    loading,
    getProfile,
    profile.bio,
    profile.email,
    profile.location,
    profile.contact,
    profile.status,
    profile.skills
  ]);
  const { email, location, contact, status, skills, bio } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    addProfile(formData);
    //console.log(formData);
    setAlert('Profile Edited', 'success');
    props.history.push('/dashboard');
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Your Profile</h1>
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
        <input type='submit' value='Submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default EditProfile;
