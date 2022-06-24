import { SEARCH_STOCKS } from '../actions/actionTypes';

const SearchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_STOCKS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default SearchReducer;
