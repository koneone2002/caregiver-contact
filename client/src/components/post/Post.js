import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PostItem from '../posts/PostItem';
import Spinner from '../layout/Spinner';

import PostContext from '../../context/post/postContext';

const Post = ({ match }) => {
  const postContext = useContext(PostContext);
  const { getPost, loading, post } = postContext;

  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/posts' className='btn'>
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
    </Fragment>
  );
};

export default Post;
