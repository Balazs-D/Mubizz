import { TOGGLE_FILTER_BAR, GET_USERS, EDIT_TOGGLE, SAVE_TOGGLE } from '../types';

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

     case EDIT_TOGGLE:
       return{
         ...state,
         edit: true
       };

      case SAVE_TOGGLE:
        return{
          ...state,
          edit: false
        }

    default:
      return state;
  }
};
