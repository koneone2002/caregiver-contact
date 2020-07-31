import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import PostContext from '../../context/post/postContext';

const PostForm = props => {
  const postContext = useContext(PostContext);
  const { addPost } = postContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <div className='post-form-header bg-primary'>
        <h3>Say Something...</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setAlert('Post Created', 'success');
          setText(' ');
        }}
      >
        <textarea
          name='text'
          placeholder='Create a post'
          value={text}
          onChange={e => setText(e.target.value)}
          cols='30'
          rows='5'
        ></textarea>
        <input type='submit' value='Submit' className='btn btn-dark my-1' />
      </form>
    </div>
  );
};

export default PostForm;
