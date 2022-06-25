import React from 'react';
import PropTypes from 'prop-types';

const StockCard = (props) => {
  const {
    img, symbol, name, price,
  } = props;

  return (
    <div className="stock-card p-2 rounded">
      <img src={img(symbol)} alt="" />
      <div className="cpny-details">
        {' '}
        <h4>{symbol}</h4>
        <h5>{name}</h5>
      </div>
      <div className="price-data">
        {' '}
        <p>
          $
          {price}
        </p>
      </div>
    </div>
  );
};

StockCard.propTypes = {
  img: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default StockCard;
