import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import StocksReducer from '../reducers/stocksList';
import ProfileReducer from '../reducers/ProfilesReducer';
import SearchReducer from '../reducers/searchStock';

const rootReducer = combineReducers({
  profile: ProfileReducer,
  searchedData: SearchReducer,
  stocks: StocksReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
