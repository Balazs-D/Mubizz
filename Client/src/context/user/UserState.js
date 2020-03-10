import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { LOGIN, SIGNIN } from './types';

const UserState = props => {
  const initialState = {
    loggedIn: false,
    newSignin: false,
    date: Date()
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //  Functions

  // handle Login
  const handleLogin = e => dispatch({ type: LOGIN });

  const newUser = e =>  dispatch({ type: SIGNIN });
  

  return (
    <UserContext.Provider
      value={{
        loggedIn: state.loggedIn,
        newSignin: state.newSignin,
        handleLogin,
        newUser
    
        
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
