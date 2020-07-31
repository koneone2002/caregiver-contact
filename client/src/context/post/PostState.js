import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import postReducer from './postReducer';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST
} from '../types';
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

  // Add Like
  const addLike = async id => {
    try {
      const res = await axios.put(`/api/posts/like/${id}`);
      dispatch({
        type: UPDATE_LIKES,
        payload: { id, likes: res.data }
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.msg, status: err.response.msg }
      });
    }
  };

  // Remove Like
  const removeLike = async id => {
    try {
      const res = await axios.put(`/api/posts/unlike/${id}`);
      dispatch({
        type: UPDATE_LIKES,
        payload: { id, likes: res.data }
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.msg, status: err.response.msg }
      });
    }
  };

  // Add Post
  const addPost = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/posts', formData, config);
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.msg, status: err.response.msg }
      });
    }
  };
  // Delete Post
  const deletePost = async id => {
    try {
      await axios.delete(`/api/posts/${id}`);
      dispatch({
        type: DELETE_POST,
        payload: id
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
        getPosts,
        addLike,
        removeLike,
        deletePost,
        addPost
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
