import { FETCH_PROFILE } from '../actions/actionTypes';

const INITIAL_STATE = [{
  datetime: '2022-05-16', open: '145.55000', high: '147.52000', low: '144.17999', close: '145.53999', volume: '86643800',
}, {
  datetime: '2022-05-13', open: '144.59000', high: '148.10001', low: '143.11000', close: '147.11000', volume: '113990900',
}, {
  datetime: '2022-05-12', open: '142.77000', high: '146.20000', low: '138.80000', close: '142.56000', volume: '182602000',
}, {
  datetime: '2022-05-11', open: '153.50000', high: '155.45000', low: '145.81000', close: '146.50000', volume: '142689800',
}, {
  datetime: '2022-05-10', open: '155.52000', high: '156.74001', low: '152.92999', close: '154.50999', volume: '115366700',
}];

const ProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return [...state];
    default:
      return state;
  }
};

export default ProfileReducer;
