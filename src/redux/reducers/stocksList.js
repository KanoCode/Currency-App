import { FETCH_STOCKS, SEARCH_STOCKS } from '../actions/actionTypes';

const INITIAL_STATE = {
  data: [],
};
const StocksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STOCKS:
      return { ...state, data: action.payload };
    case SEARCH_STOCKS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default StocksReducer;
