import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StockCard from './stockCard';

export default function Navigation() {
  const stockData = useSelector((state) => state.stocks);
  const imgUrlGenerator = (code) => `https://financialmodelingprep.com/image-stock/${code}.png`;

  return (

    <div className="container">

      {stockData.map((a) => {
        console.log(a);
        return (
          <NavLink
            to="/profile"
            state={{ from: 'Navigation', symbol: a.symbol }}
            key={1}
          >
            <StockCard
              name={a.name}
              symbol={a.symbol}
              img={imgUrlGenerator}
              price={a.price}
            />
          </NavLink>
        );
      })}
    </div>

  );
}
