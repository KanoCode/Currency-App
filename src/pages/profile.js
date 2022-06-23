import React, { useEffect } from 'react';
import '../styles/Profile.css';
import { useLocation, Link } from 'react-router-dom';
import { FaHouseUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import LineChart from '../components/LineChart';
import getProfileData from '../redux/actions/Profle-action';

const getChartData = (arr) => ({
  labels: arr.map((data) => data.datetime),
  datasets: [
    {
      fill: true,
      label: 'Open stock',
      data: arr.map((data) => data.open),
      backgroundColor: ['rgba(35,192,192,1)'],
      borderColor: 'blue',
      borderWidth: 3,
    },
    {
      fill: true,
      label: 'Volume per day',
      data: arr.map((data) => data.volume),
      borderColor: 'green',
      backgroundColor: ['rgba(8,192,192,5)'],
      borderWidth: 3,
    },
    {
      fill: true,
      label: 'stock close payday',
      data: arr.map((data) => data.close),
      backgroundColor: ['rgba(175,192,102,1)'],
      borderColor: 'greenYellow',
      borderWidth: 3,
    },
  ],

});

function Profile(props) {
  const location = useLocation();
  const { symbol } = location.state;
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(getProfileData(symbol));
  }, []);
  console.log(props, symbol);
  const UserData = useSelector((state) => state.profile.chartData);
  const {
    price,
    beta,
    image,
    companyName,
    ceo,
    description,
    mktCap,
    volAvg,
    website,
    state,
    city,
    address,
  } = useSelector((state) => state.profile.profileData)[0];
  const Data = getChartData(UserData);
  console.log(UserData[0]);

  return (
    <>
      <header className="App-header d-flex align-items-center">
        <h1 id="profile-header">
          {' '}
          <Link to="/">
            <FaHouseUser />
          </Link>
        </h1>
      </header>

      <div className="card p-1 m-2">
        <div className="card-body-top d-flex  align-items-start">
          <div className="icon-container p-3 d-flex ">
            <img
              className="rounded cpny-logo"
              src={image}
              alt="Card cap"
            />
            <h5 className="card-title">{companyName}</h5>
          </div>

          <div className="price-data d-flex flex-column">
            <span>
              $
              {price}
            </span>
            <span className="percentage-price">
              (+
              {beta}
              %)
            </span>
          </div>
        </div>
        <div className="card-body-bottom p-3">
          <span>Open</span>
          {' '}
          <span>Day High</span>
          {' '}
          <span>Day Low</span>
          <h5>
            $
            {parseInt(UserData[0].open, 10)}
          </h5>
          <h5>
            $
            {parseInt(UserData[0].high, 10)}
          </h5>
          <h5>
            $
            {parseInt(UserData[0].close, 10)}
          </h5>
        </div>
      </div>

      <LineChart chartData={Data} />
      <div className="p-3 my-3">
        <h4>Company Wiki</h4>
        <div>
          <h5>
            Company Name:
            {companyName}
          </h5>
          <h5>
            {' '}
            CEO:
            {ceo}
          </h5>
          <p>
            <h5>About</h5>
            {description.substr(0, 444)}
            ...
          </p>
          <p>
            city:
            {city}
          </p>
          <p>
            state:
            {state}
          </p>
          <p>
            address:
            {address}
          </p>
          website:
          {' '}
          <a href={website}>{website}</a>
          <p>
            Marketcap:
            {mktCap}
          </p>
          <p>
            Volume average:
            {volAvg}
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
