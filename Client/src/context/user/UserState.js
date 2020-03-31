import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import {
  TOGGLE_FILTER_BAR,
  GET_USERS,
  EDIT_TOGGLE,
  TOGGLE_TAG_BAR
} from '../types';

const UserState = props => {
  const initialState = {
    date: Date(),
    filterBar: false,
    tagBar: false,
    edit: false,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //  Functions

  // Get all users
  const getUsers = async e => {
    const res = await axios.get('http://localhost:5000/users');
    console.log('get user');

    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  };

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


  // toggle filter bar
  const toggleTagBar = e => {
    console.log('we reach this point')
    dispatch({ type: TOGGLE_TAG_BAR })};

  return (
    <UserContext.Provider
      value={{
        date: state.date,
        filterBar: state.filterBar,
        tagBar: state.tagBar,
        edit: state.edit,
        toggleFilterBar,
        getUsers,
        editToggle,
        toggleTagBar
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
