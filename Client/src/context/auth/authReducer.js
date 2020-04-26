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
  UPD_INCLUDES_STATE,
  UPD_REFLINKS_STATE,
  SET_MEMBER,
  SET_CREATOR,
  SET_PRO,
  UPD_EDUCATION_STATE,
  SET_REF_CREDIT,
  REFERENCE_LOAD,
  OFFER_LOAD,
  UPD_LOCATION_STATE,
  FETCH_PROFILES,
  FETCH_REFERENCES,
  FETCH_OFFERS,
  FETCH_PROFILE,
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

    case REFERENCE_LOAD:
      return {
        ...state,
        reference: action.payload,
      };

    case OFFER_LOAD:
      return {
        ...state,
        offer: action.payload,
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

    case FETCH_PROFILES:
      return {
        ...state,
        fetchedProfiles: action.payload,
      };

    case FETCH_OFFERS:
      return {
        ...state,
        fetchedOffers:  action.payload,
      };

    case FETCH_REFERENCES:
      return {
        ...state,
        fetchedReferences: action.payload,
      };

    case FETCH_PROFILE: 
    return {
      ...state,
      currentProfile: action.payload,
    }

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
        profile: { ...state.profile, services: action.payload },
      };

    case UPD_SKILL_STATE:
      return {
        ...state,
        profile: { ...state.profile, skills: action.payload },
      };

    case UPD_LANG_STATE:
      return {
        ...state,
        profile: { ...state.profile, languages: action.payload },
      };

    

    case UPD_LOCATION_STATE:
      return {
        ...state,
        profile: { ...state.profile, location: action.payload },
      };

    case UPD_EDUCATION_STATE:
      return {
        ...state,
        profile: { ...state.profile, education: action.payload },
      };

    case UPD_IMG_STATE:
      return {
        ...state,
        profile: { ...state.profile, avatar: action.payload },
      };

    case UPD_REFLINKS_STATE:
      return {
        ...state,
        refLinks: action.payload,
      };

    case UPD_INCLUDES_STATE:
      return {
        ...state,
        includes: action.payload,
      };

    case UPD_SOCIAL:
      return {
        ...state,
        social: action.payload,
      };

    case SET_MEMBER:
      return {
        ...state,
        member: true,
        pro: false,
        creator: false,
      };
    case SET_CREATOR:
      return {
        ...state,
        member: false,
        creator: true,
        pro: false,
      };
    case SET_PRO:
      return {
        ...state,
        member: false,
        creator: false,
        pro: true,
      };

    case SET_REF_CREDIT:
      return {
        ...state,
        credits: action.payload,
      };
    default:
      return state;
  }
};
