import React from 'react';
import '../styles/Profile.css';
import { useLocation, Link } from 'react-router-dom';
import { FaHouseUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import LineChart from '../components/LineChart';

function Profile(props) {
  console.log(props);
  const UserData = useSelector((state) => state.profile);
  console.log(UserData);
  const location = useLocation();
  const { symbol } = location.state;
  console.log(symbol);
  const Data = {
    labels: UserData.map((data) => data.datetime),
    datasets: [
      {
        fill: true,
        label: 'Volume per day',
        data: UserData.map((data) => data.volume),
        backgroundColor: [
          // You add here colors that corresponds to how many labels you have
          'rgba(75,192,192,1)',
        ],
        borderColor: 'blue',
        borderWidth: 3,
      },
    ], // Only one data set so it contains only one object
  };

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
              src="https://financialmodelingprep.com/image-stock/CASH.png"
              alt="Card cap"
            />
            <h5 className="card-title">CASH Inc.</h5>
          </div>

          <div className="price-data d-flex flex-column">
            <span>
              $
              {23}
              ,
              {32}
            </span>
            <span className="percentage-price">
              (+
              {0.38}
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
            {parseInt(UserData[0].low, 10)}
          </h5>
        </div>
      </div>

      <LineChart chartData={Data} />
      <div className="p-3 my-3">
        <h4>Company Wiki</h4>
        <div>
          <h5> employees:</h5>
          <h5> CEO:</h5>
          <p>
            {' '}
            Google LLC is an American multinational technology company that
            focuses on artificial intelligence, search engine technology, online
            advertising, cloud computing, computer software, quantum computing,
            e-commerce, and consumer electronics
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
