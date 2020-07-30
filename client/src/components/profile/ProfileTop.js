import React from 'react';

const ProfileTop = ({
  profile: {
    status,
    location,
    email,
    contact,
    bio,
    user: { name, avatar }
  }
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' src={avatar} alt='developer' />
      <h1 className='large'>{name}</h1>
      <p className='lead'>{status}</p>
      <p>{location}</p>
      <p>{contact}</p>
      <p>{email}</p>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileTop;
