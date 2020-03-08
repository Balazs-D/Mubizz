import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  
} from './types';


const GithubState = props => {
  const initialState = {
   
    
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //  Functions
 

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
