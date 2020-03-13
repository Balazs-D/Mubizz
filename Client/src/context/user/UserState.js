import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { TOGGLE_FILTER_BAR } from '../types';

const UserState = props => {
  const initialState = {
   
    date: Date(),
    filterBar: true
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //  Functions

  // handle Login
  const toggleFilterBar = e => {
  console.log('toggle')
    dispatch({ type: TOGGLE_FILTER_BAR });
  
  }
  //

  return (
    <UserContext.Provider
      value={{
        date: state.date,
        filterBar: state.filterBar,
        toggleFilterBar
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
