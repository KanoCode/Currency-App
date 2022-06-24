import { API, ApiKey } from '../../components/Utils/API';
import { FETCH_PROFILE } from './actionTypes';

const fetchProfileAction = (chartArr, detailsArr) => ({
  type: FETCH_PROFILE,
  payload: {
    chartData: chartArr,
    profileData: detailsArr,
  },
});

const getProfileData = (symbol) => async (dispatch) => {
  const chartDataRequest = await fetch(
    `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&outputsize=10&apikey=f09c17e6da8a48c7bed23e14658f6fff&source=docs`,
  );
  const ProfileDataRequest = await fetch(
    `${API}${'profile/'}${symbol}?apikey=${ApiKey}`,
  );
  const chartData = await chartDataRequest.json();
  const ProfileData = await ProfileDataRequest.json();
  const { values, meta } = chartData;

  console.log(meta, values);
  dispatch(fetchProfileAction(values, ProfileData));
};
export default getProfileData;
