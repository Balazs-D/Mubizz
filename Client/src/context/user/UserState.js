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
    avatar: '',
    infoNotesArray: [
      [
        'Update your profile and get access to the features you need!',
        'The content will effect the search results.',
      ],
      [
        'Your user name is displayed in your account until you update the profile name.',
        'Your e-mail is not public.',
        'A user profile allows you browse on MUBIZZ but no interaction.',
        'If you want to contact other users or offer a service update your profile and professional info sections.',
        'Update your photo.',
      ],
      [
        'Profile information are public. You need to fill all fields to be able to interact and create references.',
        'Use your profile motto to share a message or just simply describe your business shortly.',
        'Select the service fields your interest.',
        'Add any language you are able to communicate.',
      ],
      [
        'Membership information are public. You need to fill all fields to be able to post offers.',
        'Add your location to reach more potential business partners.',
        'Describe your business.',
        'Show your skills and the technologies your profession. (Ex.: Big Band Recording, Bass Guitar ...',
      ],
      [
        'After you created at least one of each item your profile will reach the PRO level.',
      ],
    ],
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //  Functions

  // handle Login view
  const toggleFilterBar = (e) => {
    console.log('toggle');
    dispatch({ type: TOGGLE_FILTER_BAR });
  };
  // handle profile-edit edit toggle
  const editToggle = (e) => {
    console.log('edit f works');
    dispatch({ type: EDIT_TOGGLE });
  };

  // toggle isSubmitted
  const toggleSubmitted = () => dispatch({ type: IS_SUBMITTED });

  // toggle filter bar
  const toggleTagBar = (e) => {
    console.log('we reach this point');
    dispatch({ type: TOGGLE_TAG_BAR });
  };

  // update tag selection

  const updateTagState = (input) => {
    console.log(input);

    dispatch({
      type: UPD_TAG_STATE,
      payload: input,
    });
  };

  // update skill selection

  const updateSkillState = (input) => {
    console.log(input);

    dispatch({
      type: UPD_SKILL_STATE,
      payload: input,
    });
  };

  // update languages
  const updateLanguageState = (input) => {
    console.log(input);

    dispatch({
      type: UPD_LANG_STATE,
      payload: input,
    });
  };

  // update image
  const updateImageState = (input) => {
    console.log(input);

    dispatch({
      type: UPD_IMG_STATE,
      payload: input,
    });
  };
  // Toggle tag

  const tagToggle = (e) => {
    console.log('TOGGLE CHECKED');
    dispatch({ type: TAG_TOGGLE });
  };
  return (
    <UserContext.Provider
      value={{
        date: state.date,
        filterBar: state.filterBar,
        tagBar: state.tagBar,
        edit: state.edit,
        selectedTags: state.selectedTags,
        isSubmitted: state.isSubmitted,
        tagArray: state.tagArray,
        infoNotesArray: state.infoNotesArray,
        selectedSkills: state.selectedSkills,
        languages: state.languages,
        avatar: state.avatar,
        toggleFilterBar,
        editToggle,
        toggleTagBar,
        toggleSubmitted,
        tagToggle,
        updateTagState,
        updateSkillState,
        updateLanguageState,
        updateImageState,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
