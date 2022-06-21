import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const reducers = combineReducers({
//   rockets: rocketsReducer,
//   missions: missionsReducer,
});

const store = createStore(
  applyMiddleware(thunk, logger),
);

export default store;