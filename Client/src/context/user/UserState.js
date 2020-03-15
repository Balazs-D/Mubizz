import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { TOGGLE_FILTER_BAR, GET_USERS } from '../types';

const UserState = props => {
  const initialState = {
   
    date: Date(),
    filterBar: true,
    usersArray: [],
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //  Functions

  // Get all users 
  const getUsers = async e =>{
    const res = await axios.get('http://localhost:5000/users');
  console.log('get user')

    dispatch({
      type: GET_USERS,
      payload: res.data
    })
  }

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
        toggleFilterBar,
        getUsers
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
