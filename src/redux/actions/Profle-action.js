import { API, ApiKey2, ApiKey3 } from '../../components/Utils/API';
import { FETCH_PROFILE } from './actionTypes';

export const fetchProfileAction = (chartArr, detailsArr) => ({
  type: FETCH_PROFILE,
  payload: {
    chartData: chartArr,
    profileData: detailsArr,
  },
});

const getProfileData = (symbol) => async (dispatch) => {
  const chartDataRequest = await fetch(
    `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?timeseries=10&apikey=${ApiKey2}`,
  );
  const ProfileDataRequest = await fetch(
    `${API}${'profile/'}${symbol}?apikey=${ApiKey3}`,
  );
  const chartData = await chartDataRequest.json();
  const ProfileData = await ProfileDataRequest.json();

  dispatch(fetchProfileAction(chartData.historical, ProfileData));
};
export default getProfileData;
