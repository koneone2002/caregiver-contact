import React from 'react';

const ProfileExperience = ({
  experience: { title, company, location, description }
}) => (
  <div>
    <h3 className='text-dark'>{company}</h3>

    <p>
      <strong>Position: </strong>
      {title}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
  </div>
);
export default ProfileExperience;
