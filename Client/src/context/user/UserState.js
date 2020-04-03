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
  UPD_TAG_STATE
} from '../types';

const UserState = props => {
  const initialState = {
    date: Date(),
    filterBar: false,
    tagBar: false,
    edit: false,
    selectedTags: '',
    isSubmitted: false
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //  Functions

  // handle Login view
  const toggleFilterBar = e => {
    console.log('toggle');
    dispatch({ type: TOGGLE_FILTER_BAR });
  };
  // handle profile-edit edit toggle
  const editToggle = e => {
    console.log('edit f works');
    dispatch({ type: EDIT_TOGGLE });
  };

  // toggle isSubmitted
  const toggleSubmitted = () => dispatch({ type: IS_SUBMITTED });

  // toggle filter bar
  const toggleTagBar = e => {
    console.log('we reach this point');
    dispatch({ type: TOGGLE_TAG_BAR });
  };

  const updateTagState = input => {
    console.log(input)
    
    dispatch({
      type: UPD_TAG_STATE,
      payload: input
    });
  };

  // Toggle tag

  const tagToggle = e => {
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
        toggleFilterBar,
        editToggle,
        toggleTagBar,
        toggleSubmitted,
        tagToggle,
        updateTagState
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
