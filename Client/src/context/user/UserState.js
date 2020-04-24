import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import {
  TOGGLE_FILTER_BAR,
  IS_SUBMITTED,
  EDIT_TOGGLE,
  TOGGLE_TAG_BAR,
  TAG_TOGGLE,
  UPD_TAG_STATE,
  UPD_SKILL_STATE,
  UPD_LANG_STATE,
  UPD_IMG_STATE,
  UPD_SOCIAL,
} from '../types';

const UserState = (props) => {
  const initialState = {
    date: Date(),
    filterBar: false,
    tagBar: false,
    edit: false,
    selectedTags: '',
    selectedSkills: '',
    languages: '',
    isSubmitted: false,
    social: '',
    avatar: '',
    infoNotesArray: [
      [
        'Update your profile and get access to the features you need!',
        'The content will effect the search results.',
      ],
      [
        'Your user name is displayed in your account until you update the profile name.',
        'Your e-mail is not public.',
      ],
      [
        'Profile information are public.',
        'Use your profile motto to share a message or just simply describe your business shortly.',
        'Select the service fields your interest.',
      ],
      [
        'Membership information are public.',
        'Select your location to reach more potential business partners.',
        'Describe your business. (max.: 1000 character)',
        'List your skills and the technologies your profession. (Ex.: Big Band Recording, Bass Guitar, Operating specific devices etc.',
        'Add any education or training you finished.',
        'Add spoken languages.',
      ],
      ['Visit the Offer Manager page if you are offering services to book.'],
      ['Manage your experience and knowledge into reference cards.'],
      ['Create a new reference card to present a work experience.'],
    ],
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //  Functions

  // handle Login view
  const toggleFilterBar = (e) => {
    dispatch({ type: TOGGLE_FILTER_BAR });
  };
  // handle profile-edit edit toggle
  const editToggle = (e) => {
    dispatch({ type: EDIT_TOGGLE });
  };

  // toggle isSubmitted
  const toggleSubmitted = () => dispatch({ type: IS_SUBMITTED });

  // toggle filter bar
  const toggleTagBar = (e) => {
    dispatch({ type: TOGGLE_TAG_BAR });
  };

  // update tag selection

  const updateTagState = (input) => {
    dispatch({
      type: UPD_TAG_STATE,
      payload: input,
    });
  };

  // update skill selection

  const updateSkillState = (input) => {
    dispatch({
      type: UPD_SKILL_STATE,
      payload: input,
    });
  };

  // update languages
  const updateLanguageState = (input) => {
    dispatch({
      type: UPD_LANG_STATE,
      payload: input,
    });
  };

  // update image
  const updateImageState = (input) => {
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
  // Toggle tag

  const tagToggle = (e) => {
    dispatch({ type: TAG_TOGGLE });
  };
  return (
    <UserContext.Provider
      value={{
        date: state.date,
        filterBar: state.filterBar,
        tagBar: state.tagBar,
        edit: state.edit,
        // selectedTags: state.selectedTags,
        isSubmitted: state.isSubmitted,
        // tagArray: state.tagArray,
        infoNotesArray: state.infoNotesArray,
        // selectedSkills: state.selectedSkills,
        // languages: state.languages,
        avatar: state.avatar,
        social: state.social,
        toggleFilterBar,
        editToggle,
        toggleTagBar,
        toggleSubmitted,
        tagToggle,
        // updateTagState,
        // updateSkillState,
        // updateLanguageState,
        // updateImageState,
        // updateSocial,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
