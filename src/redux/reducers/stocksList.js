import { FETCH_STOCKS } from '../actions/actionTypes';

const INITIAL_STATE = [{
  symbol: 'SPY',
  name: 'SPDR S&P 500 ETF Trust',
  price: 374.92,
  exchange: 'New York Stock Exchange Arca',
  exchangeShortName: 'AMEX',
  type: 'etf',
}, {
  symbol: 'CMCSA',
  name: 'Comcast Corporation',
  price: 38.49,
  exchange: 'NASDAQ Global Select',
  exchangeShortName: 'NASDAQ',
  type: 'stock',
}, {
  symbol: 'KMI',
  name: 'Kinder Morgan, Inc.',
  price: 16.61,
  exchange: 'New York Stock Exchange',
  exchangeShortName: 'NYSE',
  type: 'stock',
}, {
  symbol: 'INTC',
  name: 'Intel Corporation',
  price: 37.88,
  exchange: 'NASDAQ Global Select',
  exchangeShortName: 'NASDAQ',
  type: 'stock',
}, {
  symbol: 'MU',
  name: 'Micron Technology, Inc.',
  price: 57.19,
  exchange: 'NASDAQ Global Select',
  exchangeShortName: 'NASDAQ',
  type: 'stock',
}, {
  symbol: 'GDX',
  name: 'VanEck Gold Miners ETF',
  price: 30.73,
  exchange: 'New York Stock Exchange Arca',
  exchangeShortName: 'AMEX',
  type: 'etf',
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
