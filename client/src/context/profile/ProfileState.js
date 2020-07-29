import React, { useReducer } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import ProfileContext from './profileContext';
import profileReducer from './profileReducer';

import {
  GET_PROFILE,
  GET_PROFILES,
  ADD_PROFILE,
  DELETE_PROFILE,
  CLEAR_PROFILES,
  CLEAR_PROFILE,
  SET_CURRENT,
  CLEAR_CURRENT,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  FILTER_PROFILES,
  CLEAR_FILTER
} from '../types';

const ProfileState = props => {
  const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    errors: null
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);
  // Get Profile
  const getProfile = async () => {
    try {
      const res = await axios.get('/api/profile/me');
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.msg, status: err.response.msg }
      });
    }
  };
  // Get all Profiles
  const getProfiles = async () => {
    dispatch({ type: CLEAR_PROFILE });
    try {
      const res = await axios.get('/api/profile');
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.msg, status: err.response.msg }
      });
    }
  };

  // Get all Profiles
  const getProfileById = async userId => {
    try {
      const res = await axios.get(`/api/profile/user/${userId}`);
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.msg, status: err.response.msg }
      });
    }
  };

  // Add Profile or Update
  const addProfile = async formData => {
    // contact.id = uuidv4();

    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      };
      const res = await axios.post('/api/profile', formData, config);
      dispatch({
        type: ADD_PROFILE,
        payload: res.data
      });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => error.msg);
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.msg, status: err.response.msg }
      });
    }
  };

  // Delete Profile
  const deleteProfile = async id => {
    try {
      await axios.delete(`/api/profile/${id}`);
      dispatch({
        type: DELETE_PROFILE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Experience
  const addExperience = async formData => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      };
      const res = await axios.put('/api/profile/experience', formData, config);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => error.msg);
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.msg, status: err.response.msg }
      });
    }
  };
  // Add Education
  const addEducation = async formData => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      };
      const res = await axios.put('/api/profile/education', formData, config);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => error.msg);
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.msg, status: err.response.msg }
      });
    }
  };
  // Update Profile
  const updateProfile = async profile => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    try {
      const res = await axios.put(
        `/api/profile/${profile._id}`,
        profile,
        config
      );
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };
  // Delete experience
  const deleteExperience = async id => {
    try {
      const res = await axios.delete(`/api/profile/experience/${id}`);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };
  // Delete education
  const deleteEducation = async id => {
    try {
      const res = await axios.delete(`/api/profile/education/${id}`);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };
  // Delete account
  const deleteAccount = async () => {
    if (window.confirm('Are you sure? This can NOT be undone')) {
      try {
        const res = await axios.delete('/api/profile');
        dispatch({ type: CLEAR_PROFILE });
      } catch (err) {
        dispatch({
          type: PROFILE_ERROR,
          payload: err.response.msg
        });
      }
    }
  };
  // Clear Profiles
  const clearProfiles = () => {
    dispatch({ type: CLEAR_PROFILES });
  };
  // Clear Profile
  const clearProfile = () => {
    dispatch({ type: CLEAR_PROFILE });
  };
  // Set Current Profile
  const setCurrent = profile => {
    dispatch({ type: SET_CURRENT, payload: profile });
  };
  // Clear Current Profile
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Profiles
  const filterProfiles = text => {
    dispatch({ type: FILTER_PROFILES, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        profiles: state.profiles,
        current: state.current,
        filtered: state.filtered,
        errors: state.errors,
        loading: state.loading,
        addProfile,
        addExperience,
        addEducation,
        deleteExperience,
        deleteEducation,
        deleteAccount,
        deleteProfile,
        clearProfiles,
        clearProfile,
        setCurrent,
        clearCurrent,
        updateProfile,
        filterProfiles,
        clearFilter,
        getProfile,
        getProfileById,
        getProfiles
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
