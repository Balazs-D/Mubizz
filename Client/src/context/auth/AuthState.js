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
  UPD_INCLUDES_STATE,
  UPD_REFLINKS_STATE,
  SET_MEMBER,
  SET_CREATOR,
  SET_PRO,
  UPD_EDUCATION_STATE,
  SET_REF_CREDIT,
  REFERENCE_LOAD,
  OFFER_LOAD,
  FETCH_PROFILES,
  FETCH_OFFERS,
  FETCH_REFERENCES,
  FETCH_PROFILE,
  FILTER_OBJECT,
  SEARCH_KEYWORD,
} from '../types';
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    profile: [],
    reference: [],
    offer: {},
    error: null,
    fetchedProfiles: [],
    fetchedOffers: [],
    fetchedReferences: [],
    currentProfile: [],
    filterObject: [],
    searchKeyword: '',
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
    refLinks: [],
    includes: [],
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

      const res = await axios.get('/api/login');
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
      const res = await axios.get('/api/profile/me');

      dispatch({
        type: PROFILE_LOADED,
        payload: res.data,
      });
    } catch (error) {
      console.log('getUserData error');
    }
  };

  const getSelectedProfile = async (id) => {
    try {
      const res = await axios.get(`/api/profile/user/${id}`);
      dispatch({
        type: FETCH_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      console.log('get fetched profile error');
    }
  };

  const getFetchedProfiles = async ()=>{
    try {
      const res = await axios.get('/api/profile');
      dispatch({
        type: FETCH_PROFILES,
        payload: res.data
      });
    } catch (error) {
      console.log('get fetched profiles error')
      
    }
  };

    const getFetchedOffers = async () => {
      try {
        const res = await axios.get(`/api/offer/user`);
        console.log('FETCHED OFFERS: ', res.data);
        dispatch({
          type: FETCH_OFFERS,
          payload: res.data,
        });
      } catch (error) {
        console.log('get fetched offers error');
      }
    };

  const getFetchedReferences = async () => {
    try {
      const res = await axios.get('/api/reference/user');
      dispatch({
        type: FETCH_REFERENCES,
        payload: res.data,
      });
    } catch (error) {
      console.log('get fetched references error');
    }
  };  

  const getReference = async () => {
    try {
      const res = await axios.get('/api/reference/me');

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
      const res = await axios.get('/api/offer/me');

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
        '/api/register',
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
        '/api/login',
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
        '/api/profile',
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
        '/api/reference',
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

      const res = await axios.post('/api/offer', formData);
      console.log('try pre dispatch');

      console.log('pre load user');
      // loadUser();
    } catch (err) {
      console.log('ERROR UPDATE');
    }
  };

  const setFilterObject =(input)=>{
    dispatch({
      type: FILTER_OBJECT,
      payload: input
    })
  };

    const setSearchKeyword =(input)=>{
    dispatch({
      type: SEARCH_KEYWORD,
      payload: input
    })
  };



  // UPDATE COMPONENT STATE IN AUTH
  // update tag selection

  const updateServices = (input) => {
    dispatch({
      type: UPD_TAG_STATE,
      payload: input,
    });
  };

  const updateRefLinks = (input) => {
    dispatch({
      type: UPD_REFLINKS_STATE,
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

  // update includes
  const updateIncludes = (input) => {
    dispatch({
      type: UPD_INCLUDES_STATE,
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
        refLinks: state.refLinks,
        includes: state.includes,
        fetchedProfiles: state.fetchedProfiles,
        fetchedOffers: state.fetchedOffers,
        fetchedReferences: state.fetchedReferences,
        currentProfile: state.currentProfile,
        filterObject: state.filterObject,
        searchKeyword: state.searchKeyword,
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
        updateEducation,
        addCredit,
        addReference,
        getReference,
        addOffer,
        getOffer,
        updateIncludes,
        updateRefLinks,
        getFetchedProfiles,
        getFetchedOffers,
        getFetchedReferences,
        getSelectedProfile,
        setFilterObject,
        setSearchKeyword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
