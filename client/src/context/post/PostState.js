import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import postReducer from './postReducer';
import { GET_POSTS, POST_ERROR } from '../types';
const PostState = props => {
  const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
  };
  const [state, dispatch] = useReducer(postReducer, initialState);
  // Get Posts
  const getPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.msg, status: err.response.msg }
      });
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        loading: state.loading,
        error: state.error,
        getPosts
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
