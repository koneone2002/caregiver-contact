import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import Moment from 'react-moment';
import PostContext from '../../context/post/postContext';
import AlertContext from '../../context/alert/alertContext';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date }
}) => {
  const postContext = useContext(PostContext);
  const { deleteComment } = postContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const authContext = useContext(AuthContext);
  const { loading } = authContext;

  return (
    <div className='post bg-white p-1 my-1'>
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
        {!loading && user === authContext.user._id && (
          <button
            className='btn btn-danger'
            onClick={e => {
              deleteComment(postId, _id);
              setAlert('Comment removed', 'success');
            }}
            type='button'
          >
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
