import React, { Fragment, useContext } from 'react';
import ProfileContext from '../../context/profile/profileContext';
import AlertContext from '../../context/alert/alertContext';

const Education = ({ education }) => {
  const profileContext = useContext(ProfileContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { deleteEducation } = profileContext;

  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.fieldofstudy}</td>

      <td>
        <button
          className='btn btn-danger'
          onClick={() => {
            deleteEducation(edu._id);
            setAlert('Education removed', 'success');
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Field of Study</th>
            <th className='hide-sm'>{''}</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

export default Education;
