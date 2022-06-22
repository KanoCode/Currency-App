import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import StocksReducer from '../reducers/stocksList';
import ProfileReducer from '../reducers/ProfilesReducer';

const reducers = combineReducers({
  stocks: StocksReducer,
  profile: ProfileReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
