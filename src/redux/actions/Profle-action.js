// import { API, ApiKey } from '../../components/Utils/API';
// import { FETCH_PROFILE } from './actionTypes';

// const fetchProfileAction = (chartArr, detailsArr) => ({
//   type: FETCH_PROFILE,
//   payload: {
//     chartData: chartArr,
//     profileData: detailsArr,
//   },
// });

// const getProfileData = (symbol) => async (dispatch) => {
//   const chartDataRequest = await fetch(
//     `${API}${'historical-chart/1month/'}${symbol}?apikey=${ApiKey}`,
//   );
//   const ProfileDataRequest = await fetch(
//     `${API}${'profile/'}${symbol}?apikey=${ApiKey}`,
//   );
//   const chartData = await chartDataRequest.json();
//   const ProfileData = await ProfileDataRequest.json();
//   console.log(ProfileData, chartData);
//   dispatch(fetchProfileAction(chartData.slice(0, 10), ProfileData));
// };
// export default getProfileData;
