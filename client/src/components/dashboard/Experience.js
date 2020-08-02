import React, { Fragment, useContext } from 'react';
import ProfileContext from '../../context/profile/profileContext';
import AlertContext from '../../context/alert/alertContext';

const Experience = ({ experience }) => {
  const profileContext = useContext(ProfileContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { deleteExperience } = profileContext;
  // const onClick = () => {
  //   deleteExperience(experience._id);
  //   setAlert('Experience removed', 'success');
  // };
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => {
            deleteExperience(exp._id);
            setAlert('Experience removed', 'success');
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>{''}</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

export default Experience;
