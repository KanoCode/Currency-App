import React from 'react';
import PropTypes from 'prop-types';

const StockCard = (props) => {
  const {
    img, symbol, price, name,
  } = props;

  return (
    <div className="stock-card">
      <img src={img(symbol)} alt="" />
      <div>
        {' '}
        <h4>{name}</h4>
        <h5>{symbol}</h5>
        <span>{price}</span>
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
