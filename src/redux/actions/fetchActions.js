import { useSelector } from 'react-redux';
import { FETCH_STOCKS } from './actionTypes';

const fetchStocksData = () => async (dispatch) => {
  const dataRequest = await fetch('https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=X1Trc3p4OCoSk8bCZDVRXntHP7nlqMzGSmK42S23');
  const searchResp = await dataRequest.json();
  const { data } = searchResp;
  const stockData = useSelector((state) => state.stocks);
  const newArr = [...stockData];
  data.forEach((a) => {
    const obj = { symbol: a.ticker, companyName: a.name, ...a };
    newArr.push(obj);
  });
  console.log(newArr);
  dispatch({ type: FETCH_STOCKS, payload: newArr });
};
export default fetchStocksData;
