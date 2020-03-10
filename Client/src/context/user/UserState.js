import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import {
  LOGIN
  
} from './types';
import userContext from './userContext';


const UserState = props => {
  const initialState = {
    loggedIn: false,
    
   
    
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //  Functions
 
  const handleLogin = () => {
    console.log( state.loggedIn)
    dispatch(
      {type: LOGIN })};
  

  return (
    <UserContext.Provider
      value={{
        loggedIn: state.loggedIn,
        handleLogin,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
