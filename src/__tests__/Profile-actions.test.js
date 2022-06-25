import { FETCH_PROFILE } from '../redux/actions/actionTypes';
import { fetchProfileAction } from '../redux/actions/Profle-action';

test('returns an object when called with two arrays', () => {
  const arr1 = ['12', '34', '32'];
  const arr2 = ['name', 'is', 'data', 'see'];
  const obj = {
    type: FETCH_PROFILE,
    payload: {
      chartData: arr1,
      profileData: arr2,
    },
  };
  expect(fetchProfileAction(arr1, arr2)).toEqual(obj);
});
