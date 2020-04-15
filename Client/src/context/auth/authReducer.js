import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  PROFILE_LOADED,
  UPDATE,
  LOGOUT,
  CLEAR_ERRORS,
  UPD_TAG_STATE,
  UPD_SKILL_STATE,
  UPD_LANG_STATE,
  UPD_IMG_STATE,
  UPD_SOCIAL,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case PROFILE_LOADED:
      return {
        ...state,
        profile: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
        // name: null,
        // email: null
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case UPD_TAG_STATE:
      return {
        ...state,
        profile: {...state.profile, services: action.payload},
      };

    case UPD_SKILL_STATE:
      return {
        ...state,
        profile: {...state.profile, skills: action.payload},
      };

    case UPD_LANG_STATE:
      return {
        ...state,
        profile: {...state.profile, languages: action.payload},
      };

    case UPD_IMG_STATE:
      return {
        ...state,
       profile: {...state.profile, avatar: action.payload},
      };

    case UPD_SOCIAL:
      return {
        ...state,
        social: action.payload,
      };

   

    default:
      return state;
  }
};
