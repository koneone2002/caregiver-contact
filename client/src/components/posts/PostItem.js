import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PostContext from '../../context/post/postContext';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => {
  const postContext = useContext(PostContext);
  const { addLike, removeLike, deletePost } = postContext;
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const removePost = e => {
    deletePost(_id);
    setAlert('Post deleted', 'success');
  };
  return (
    <div className='post bg-white my-1 p-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        {showActions && (
          <Fragment>
            <button className='btn' onClick={e => addLike(_id)}>
              <i className='fas fa-thumbs-up'></i>
              {likes.length > 0 && <span> {likes.length}</span>}
            </button>
            <button className='btn' onClick={e => removeLike(_id)}>
              <i className='fas fa-thumbs-down'></i>
            </button>
            <Link to={`/posts/${_id}`} className='btn btn-primary'>
              Discussion{' '}
              {comments.length > 0 && (
                <span className='comment-count'>{comments.length}</span>
              )}
            </Link>
            {isAuthenticated && user === authContext.user._id && (
              <button
                type='button'
                onClick={removePost}
                className='btn btn-danger'
              >
                <i className='fas fa-times'></i>
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};
PostItem.defaultProps = {
  showActions: true
};

export default PostItem;
