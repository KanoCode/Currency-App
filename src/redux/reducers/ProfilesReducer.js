import { FETCH_PROFILE } from '../actions/actionTypes';

const INITIAL_STATE = {
  chartData: [
    {
      datetime: '2022-06-21 13:30:00',
      open: '135.89000',
      high: '136.11690',
      low: '135.64000',
      close: '135.82001',
      volume: '2309621',
    },
    {
      datetime: '2022-06-21 13:00:00',
      open: '136.07500',
      high: '136.17999',
      low: '135.74001',
      close: '135.89000',
      volume: '2280546',
    },
    {
      datetime: '2022-06-21 12:30:00',
      open: '136.00999',
      high: '136.12000',
      low: '135.71001',
      close: '136.07001',
      volume: '2803433',
    },
    {
      datetime: '2022-06-17 15:30:00',
      open: '132.00000',
      high: '132.13831',
      low: '131.39999',
      close: '131.44000',
      volume: '1732298',
    },
    {
      datetime: '2022-06-17 14:00:00',
      open: '132.07001',
      high: '132.53999',
      low: '131.85001',
      close: '132.22000',
      volume: '0',
    },
  ],
  profileData: [
    {
      symbol: 'AAPL',
      price: 135.35,
      beta: 1.20009,
      volAvg: 96021285,
      mktCap: 2190666891264,
      lastDiv: 0.89,
      range: '129.04-182.94',
      changes: -0.519989,
      companyName: 'Apple Inc.',
      currency: 'USD',
      cik: '0000320193',
      isin: 'US0378331005',
      cusip: '037833100',
      exchange: 'NASDAQ Global Select',
      exchangeShortName: 'NASDAQ',
      industry: 'Consumer Electronics',
      website: 'https://www.apple.com',
      description:
        'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. In addition, the company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; AirPods Max, an over-ear wireless headphone; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, and iPod touch. Further, it provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. Additionally, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was incorporated in 1977 and is headquartered in Cupertino, California.',
      ceo: 'Mr. Timothy Cook',
      sector: 'Technology',
      country: 'US',
      fullTimeEmployees: '154000',
      phone: '14089961010',
      address: '1 Apple Park Way',
      city: 'Cupertino',
      state: 'CALIFORNIA',
      zip: '95014',
      dcfDiff: 2.07175,
      dcf: 137.422,
      image: 'https://financialmodelingprep.com/image-stock/AAPL.png',
      ipoDate: '1980-12-12',
      defaultImage: false,
      isEtf: false,
      isActivelyTrading: true,
      isAdr: false,
      isFund: false,
    },
  ],
};
const ProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default ProfileReducer;
