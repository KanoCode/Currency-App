import StocksReducer from '../redux/reducers/stocksList';
import { FETCH_STOCKS, SEARCH_STOCKS } from '../redux/actions/actionTypes';

const arr1 = ['12', '34', '32'];
const arr2 = ['name', 'is', 'data', 'see'];
const action1 = { type: FETCH_STOCKS, payload: arr1 };
const action2 = { type: SEARCH_STOCKS, data: arr2 };
const state = {};

test('Expect to return on Object', () => {
  expect(StocksReducer(state, action1)).toEqual({ ...state, data: action1.payload });
  expect(StocksReducer(state, action2)).toEqual({ ...state, data: action2.payload });
});
