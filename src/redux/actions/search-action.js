import { ApiKey } from '../../components/Utils/API';
import { SEARCH_STOCKS } from './actionTypes';

const searchData = (query) => async (dispatch) => {
  const dataRequest = await fetch(`https://financialmodelingprep.com/api/v3/search-name?query=${query}&limit=10&exchange=NASDAQ&apikey=${ApiKey}`);
  const searchResp = await dataRequest.json();
  dispatch({ type: SEARCH_STOCKS, payload: searchResp });
};
export default searchData;
