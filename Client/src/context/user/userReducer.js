import { LOGIN } from '../../context/user/types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      };

    default:
      return state;
  }
};
