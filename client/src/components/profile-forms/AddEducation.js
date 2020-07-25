import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileContext from '../../context/profile/profileContext';
import AlertContext from '../../context/alert/alertContext';

const AddEducation = props => {
  const [formData, setFormData] = useState({
    school: '',
    fieldofstudy: '',
    description: ''
  });
  const { school, fieldofstudy, description } = formData;
  const profileContext = useContext(ProfileContext);
  const alertContext = useContext(AlertContext);
  const { addEducation } = profileContext;
  const { setAlert } = alertContext;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    addEducation(formData);

    setAlert('Education Added', 'success');
    props.history.push('/dashboard');
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Your Education</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Add schools you have attended
      </p>

      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='School'
            name='school'
            value={school}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Field of Study'
            name='fieldofstudy'
            value={fieldofstudy}
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
          <textarea
            name='description'
            placeholder='Description'
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

export default AddEducation;
