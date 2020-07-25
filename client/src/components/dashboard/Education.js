import React, { Fragment, useContext } from 'react';
import ProfileContext from '../../context/profile/profileContext';

const Education = ({ education }) => {
  const profileContext = useContext(ProfileContext);
  // const { experience } = profileContext;

  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.fieldofstudy}</td>
      <td>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Education Information</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Field of Study</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

export default Education;
