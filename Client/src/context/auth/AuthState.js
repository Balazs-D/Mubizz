import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE,
  CLEAR_ERRORS,
  PROFILE_LOADED,
  SET_ALERT,
  UPD_TAG_STATE,
  UPD_SKILL_STATE,
  UPD_LANG_STATE,
  UPD_IMG_STATE,
  UPD_SOCIAL
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    profile: [],
    error: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //  Load User

  const loadUser = async () => {
    if (localStorage.token) {
      console.log(localStorage.token);
      setAuthToken(localStorage.token);
    }

    try {
      console.log('Load User TRY');

      // look fo the user

      const res = await axios.get('http://localhost:5000/api/login');
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  const getProfile = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/profile/me');

      dispatch({
        type: PROFILE_LOADED,
        payload: res.data,
      });
    } catch (error) {
      console.log('getUserData error');
    }
  };

  //  Register User
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        'http://localhost:5000/api/register',
        formData,
        config
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser();
      getProfile();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  //  Login User

  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        'http://localhost:5000/api/login',
        formData,
        config
      );
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
      getProfile();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  //  Logout

  const logout = () => dispatch({ type: LOGOUT });

  //  Clear errors

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  //  Update Profile
  const update = async (formData) => {
    try {
      console.log(formData);

      const res = await axios.post(
        'http://localhost:5000/api/profile',
        formData
      );
      console.log('try pre dispatch');

      console.log('pre load user');
      // loadUser();
    } catch (err) {
      console.log('ERROR UPDATE');
    }
  };

  // UPDATE COMPONENT STATE IN AUTH
  // update tag selection

  const updateServices = (input) => {
    dispatch({
      type: UPD_TAG_STATE,
      payload: input,
    });
  };

  // update skill selection

  const updateSkills = (input) => {
    dispatch({
      type: UPD_SKILL_STATE,
      payload: input,
    });
  };

  // update languages
  const updateLanguages = (input) => {
    dispatch({
      type: UPD_LANG_STATE,
      payload: input,
    });
  };

  // update image
  const updateAvatar = (input) => {
    dispatch({
      type: UPD_IMG_STATE,
      payload: input,
    });
  };

  // update social links
  const updateSocial = (input) => {
    console.log(input);

    dispatch({
      type: UPD_SOCIAL,
      payload: input,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        profile: state.profile,
        loading: state.loading,
        error: state.error,
        updateServices,
        updateSkills,
        updateAvatar,
        updateLanguages,
        updateSocial,
        register,
        clearErrors,
        login,
        loadUser,
        logout,
        update,
        getProfile,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
