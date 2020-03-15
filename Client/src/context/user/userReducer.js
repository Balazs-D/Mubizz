import { TOGGLE_FILTER_BAR, GET_USERS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_BAR:
      return {
        ...state,
        filterBar: !state.filterBar
      };

    case GET_USERS:
      return {
        ...state,
        usersArray: action.payload
      };

    default:
      return state;
  }
};
