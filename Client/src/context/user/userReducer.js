import {
  TOGGLE_FILTER_BAR,
  GET_USERS,
  EDIT_TOGGLE,
  SAVE_TOGGLE,
  TOGGLE_TAG_BAR
} from '../types';

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
      return {
        ...state,
        edit: true
      };

    case SAVE_TOGGLE:
      return {
        ...state,
        edit: false
      };

    case TOGGLE_TAG_BAR:
      return {
        ...state,
        tagBar: !state.tagBar
      };

    default:
      return state;
  }
};
