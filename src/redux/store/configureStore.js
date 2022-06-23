import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import StocksReducer from '../reducers/stocksList';
import ProfileReducer from '../reducers/ProfilesReducer';
import SearchReducer from '../reducers/searchStock';

const reducers = combineReducers({
  profile: ProfileReducer,
  searchedData: SearchReducer,
  stocks: StocksReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
