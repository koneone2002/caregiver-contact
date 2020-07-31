import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PostContext from '../../context/post/postContext';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const PostItem = props => {
  const postContext = useContext(PostContext);
  const {
    post,
    _id,
    text,
    name,
    avatar,
    user,
    likes,
    comments,
    date
  } = postContext;

  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  return (
    <div className='post bg-white my-1 p-1'>
      <div>
        <a href='profile.html'>
          <img
            className='round-img'
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            alt=''
          />
          <h4>John Doe</h4>
        </a>
      </div>
      <div>
        <p className='my-1'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum iure
          totam explicabo dignissimos necessitatibus reprehenderit soluta dolore
          quis laboriosam eius, tempore aliquam earum ducimus, sapiente impedit
          consequuntur dolor optio et!
        </p>
        <button className='btn'>
          <i className='fas fa-thumbs-up'></i>
          <span> 4</span>
        </button>
        <button className='btn'>
          <i className='fas fa-thumbs-down'></i>
        </button>
        <a href='post.html' className='btn btn-primary'>
          Discussion
        </a>
      </div>
    </div>
  );
};

export default PostItem;
