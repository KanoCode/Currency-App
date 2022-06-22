import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaHouseUser } from 'react-icons/fa';
// import { symbol } from 'prop-types';

function Profile(props) {
  console.log(props);
  const location = useLocation();
  const { symbol } = location.state;
  console.log(symbol);
  return (
    <Link to="/"><FaHouseUser /></Link>
  );
}

export default Profile;
