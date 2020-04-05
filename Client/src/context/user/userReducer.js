import {
  TOGGLE_FILTER_BAR,
  GET_USERS,
  EDIT_TOGGLE,
  TOGGLE_TAG_BAR,
  IS_SUBMITTED,
  TAG_TOGGLE,
  UPD_TAG_STATE,
  UPD_SKILL_STATE,
  UPD_LANG_STATE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_BAR:
      return {
        ...state,
        filterBar: !state.filterBar,
      };

    case GET_USERS:
      return {
        ...state,
        usersArray: action.payload,
      };

    case EDIT_TOGGLE:
      return {
        ...state,
        edit: !state.edit,
      };

    case TOGGLE_TAG_BAR:
      return {
        ...state,
        tagBar: !state.tagBar,
      };

    case IS_SUBMITTED:
      return {
        ...state,
        isSubmitted: true,
      };

    case TAG_TOGGLE:
      return {
        ...state,
        tagArray: { ...state, isChecked: !state.isChecked },
      };

    case UPD_TAG_STATE:
      return {
        ...state,
        selectedTags: action.payload,
      };

    case UPD_SKILL_STATE:
      return {
        ...state,
        selectedSkills: action.payload,
      };

    case UPD_LANG_STATE:
      return {
        ...state,
        languages: action.payload,
      };

    default:
      return state;
  }
};
