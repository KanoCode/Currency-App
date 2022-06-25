import { FETCH_STOCKS } from './actionTypes';
import { ApiKey1 } from '../../components/Utils/API';

const fetchStocksData = () => async (dispatch) => {
  const dataRequest = await fetch(`https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&apikey=${ApiKey1}`);
  const searchResp = await dataRequest.json();
  dispatch({ type: FETCH_STOCKS, payload: searchResp });
};
export default fetchStocksData;
