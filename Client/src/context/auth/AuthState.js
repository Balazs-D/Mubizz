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
  UPD_LOCATION_STATE,
  UPD_SOCIAL,
  SET_MEMBER,
  SET_CREATOR,
  SET_PRO,
  SET_STATUS,
  UPD_EDUCATION_STATE,
  SET_REF_CREDIT,
  REFERENCE_LOAD,
  OFFER_LOAD
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    profile: [],
    reference: [],
    offer: [],
    error: null,
    social: {
      youtube: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
      discogs: '',
      bandcamp: '',
      soundcloud: '',
    },
    member: false,
    creator: false,
    pro: false,
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

  const getReference = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/reference/me');

      dispatch({
        type: REFERENCE_LOAD,
        payload: res.data,
      });
    } catch (error) {
      console.log('getReference error');
    }
  };

  const getOffer = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/offer/me');

      dispatch({
        type: OFFER_LOAD,
        payload: res.data,
      });
    } catch (error) {
      console.log('getOFFER error');
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
      console.log(err.response);
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errors.msg,
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
      getReference();
      getOffer();
      setStatus();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.errors[0].msg,
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

  //  Update Profile
  const addReference = async (formData) => {
    try {
      console.log(formData);

      const res = await axios.post(
        'http://localhost:5000/api/reference',
        formData
      );
      console.log('try pre dispatch');

      console.log('pre load user');
      // loadUser();
    } catch (err) {
      console.log('ERROR UPDATE');
    }
  };

  //  Update Profile
  const addOffer = async (formData) => {
    try {
      console.log(formData);

      const res = await axios.post(
        'http://localhost:5000/api/offer',
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
  console.log(state);
  // update skill selection

  const updateSkills = (input) => {
    dispatch({
      type: UPD_SKILL_STATE,
      payload: input,
    });
  };
  console.log(state.profile);

  // update languages
  const updateLanguages = (input) => {
    dispatch({
      type: UPD_LANG_STATE,
      payload: input,
    });
  };

  // update location
  const updateLocation = (input) => {
    dispatch({
      type: UPD_LOCATION_STATE,
      payload: input,
    });
  };

  // update education
  const updateEducation = (input) => {
    dispatch({
      type: UPD_EDUCATION_STATE,
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

  // set ref credits

  const addCredit = (input) => {
    dispatch({
      type: SET_REF_CREDIT,
      payload: input,
    });
  };

  // set status

  const setMember = () => dispatch({ type: SET_MEMBER });
  const setCreator = () => dispatch({ type: SET_CREATOR });
  const setPro = () => dispatch({ type: SET_PRO });

  // use staus

  const setStatus = () => {
    if (
      state.creator === true &&
      state.profile.location.length > 0 &&
      state.profile.description.length > 0 &&
      state.profile.skills.length > 0 &&
      state.profile.languages.length > 0 &&
      state.profile.offers.length > 0
    ) {
      setPro();
    } else if (
      state.profile &&
      state.member === true &&
      state.education.length > 0 &&
      state.profile.reference.length > 0
    ) {
      setCreator();
    } else if (
      state.profile.profileName &&
      state.profile.profileMotto &&
      state.profile.avatar
    ) {
      setMember();
      console.log('member');
    } else {
      console.log('undefined');

      return undefined;
    }
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
        social: state.social,
        member: state.member,
        creator: state.creator,
        pro: state.pro,
        reference: state.reference,
        offer: state.offer,
        updateServices,
        updateSkills,
        updateAvatar,
        updateLanguages,
        updateLocation,
        updateSocial,
        register,
        clearErrors,
        login,
        loadUser,
        logout,
        update,
        getProfile,
        setMember,
        setCreator,
        setPro,
        setStatus,
        updateEducation,
        addCredit,
        addReference,
        getReference,
        addOffer,
        getOffer,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
