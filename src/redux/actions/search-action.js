// import { API, ApiKey } from '../../components/Utils/API';
import { SEARCH_STOCKS } from './actionTypes';

const searchData = (query) => async (dispatch) => {
  const dataRequest = await fetch(`https://financialmodelingprep.com/api/v3/search-name?query=${query}&limit=10&exchange=NASDAQ&apikey=6e2845494003e975064b666375a9f929`);
  const searchResp = await dataRequest.json();
  console.log(searchResp);
  dispatch({ type: SEARCH_STOCKS, payload: searchResp });
};
export default searchData;
