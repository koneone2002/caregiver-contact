import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileContext from '../../context/profile/profileContext';
import AlertContext from '../../context/alert/alertContext';

const AddExperience = props => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });
  const { title, company, location, description } = formData;
  const profileContext = useContext(ProfileContext);
  const alertContext = useContext(AlertContext);
  const { addExperience } = profileContext;
  const { setAlert } = alertContext;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    addExperience(formData);

    setAlert('Experience Added', 'success');
    props.history.push('/dashboard');
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Add An Experience</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Add any care giving positions that you
        have had in the past
      </p>

      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Job Title'
            name='title'
            value={title}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Company'
            name='company'
            value={company}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
          <textarea
            name='description'
            placeholder='Job Description'
            cols='30'
            rows='5'
            value={description}
            onChange={onChange}
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link to='/dashboard' className='btn my-1'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default AddExperience;
