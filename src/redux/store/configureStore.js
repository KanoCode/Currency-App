import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import StocksReducer from '../reducers/stocksList';

const reducers = combineReducers({
  stocks: StocksReducer,
  //   missions: missionsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
