import { TOGGLE_FILTER_BAR } from '../types';

export default (state, action) => {
  switch (action.type) {
   
    case TOGGLE_FILTER_BAR:
      return{
        ...state,
        filterBar: !state.filterBar

      }

     

    default:
      return state;
  }
};
