import { FETCH_STOCKS } from '../actions/actionTypes';

const INITIAL_STATE = [{
  symbol: 'QCOM',
  companyName: 'QUALCOMM Incorporated',
  marketCap: 135508795392,
  sector: 'Technology',
  industry: 'Semiconductors',
  beta: 1.2142,
  price: 120.9900,
  lastAnnualDividend: 2.8600,
  volume: 10793314,
  exchange: 'NASDAQ Global Select',
  exchangeShortName: 'NASDAQ',
  country: 'US',
  isEtf: false,
  isActivelyTrading: true,
}, {
  symbol: 'UNP',
  companyName: 'Union Pacific Corporation',
  marketCap: 129655767040,
  sector: 'Industrials',
  industry: 'Railroads',
  beta: 1.2142,
  price: 206.4500,
  lastAnnualDividend: 4.7300,
  volume: 3317625,
  exchange: 'New York Stock Exchange',
  exchangeShortName: 'NYSE',
  country: 'US',
  isEtf: false,
  isActivelyTrading: true,
}, {
  symbol: 'AMGN',
  companyName: 'Amgen Inc.',
  marketCap: 125387423744,
  sector: 'Healthcare',
  industry: 'Drug Manufacturers—General',
  beta: 0.5726,
  price: 234.7200,
  lastAnnualDividend: 7.4000,
  volume: 3180759,
  exchange: 'NASDAQ Global Select',
  exchangeShortName: 'NASDAQ',
  country: 'US',
  isEtf: false,
  isActivelyTrading: true,
}, {
  symbol: 'HON',
  companyName: 'Honeywell International Inc.',
  marketCap: 122327719936,
  sector: 'Industrials',
  industry: 'Conglomerates',
  beta: 1.0762,
  price: 179.7000,
  lastAnnualDividend: 3.8700,
  volume: 3193966,
  exchange: 'NASDAQ Global Select',
  exchangeShortName: 'NASDAQ',
  country: 'US',
  isEtf: false,
  isActivelyTrading: true,
}, {
  symbol: 'IBM',
  companyName: 'International Business Machines Corporation',
  marketCap: 121021128704,
  sector: 'Technology',
  industry: 'Information Technology Services',
  beta: 1.0041,
  price: 135.0200,
  lastAnnualDividend: 6.5700,
  volume: 5049012,
  exchange: 'New York Stock Exchange',
  exchangeShortName: 'NYSE',
  country: 'US',
  isEtf: false,
  isActivelyTrading: true,
},
];

const StocksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STOCKS:
      return [...state];
    default:
      return state;
  }
};

export default StocksReducer;
