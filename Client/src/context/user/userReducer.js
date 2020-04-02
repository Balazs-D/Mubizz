import {
  TOGGLE_FILTER_BAR,
  GET_USERS,
  EDIT_TOGGLE,
  TOGGLE_TAG_BAR,
  IS_SUBMITTED
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
        edit: !state.edit
      };


    case TOGGLE_TAG_BAR:
      return {
        ...state,
        tagBar: !state.tagBar
      };

      case IS_SUBMITTED:
        return {
          ...state,
          isSubmitted: true,
        }

    default:
      return state;
  }
};
