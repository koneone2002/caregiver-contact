import React, { useContext, Fragment, useEffect } from 'react';
import PostItem from './PostItem';
import PostContext from '../../context/post/postContext';
import AlertContext from '../../context/alert/alertContext';
import Spinner from '../layout/Spinner';

const Posts = () => {
  const postContext = useContext(PostContext);
  const alertContext = useContext(AlertContext);
  const { getPosts, posts, loading } = postContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Posts</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome to the community
      </p>
      {/* Post Form */}
      <div className='posts'>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

export default Posts;
