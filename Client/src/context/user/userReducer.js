import { 
LOGIN,
SIGNIN } from '../../context/user/types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      };

      case SIGNIN: 
      return {
        ...state,
        newSignin: !state.newSignin,
      }

    default:
      return state;
  }
};
