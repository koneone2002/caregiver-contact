import React from 'react';

const ProfileEducation = ({
  education: { school, fieldofstudy, description }
}) => (
  <div>
    <h3 className='text-dark'>{school}</h3>

    <p>
      <strong>Field of Study: </strong>
      {fieldofstudy}
    </p>

    {description && (
      <p>
        <strong>Description: </strong>
        {description}{' '}
      </p>
    )}
  </div>
);
export default ProfileEducation;
