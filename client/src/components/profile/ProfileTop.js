import React from 'react';

const ProfileTop = ({
  profile: {
    status,
    location,
    email,
    contact,

    user: { name, avatar }
  }
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' src={avatar} alt='developer' />
      <h1 className='large'>{name}</h1>
      <p className='lead'>{status && <span>{status}</span>}</p>
      <p>{location && <span>{location}</span>}</p>
      <p>{contact && <span>{contact}</span>}</p>
      <p>{email}</p>
    </div>
  );
};

export default ProfileTop;
