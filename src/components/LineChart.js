/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as chartjs } from 'chart.js/auto'; // import this like this or else it won't work

function LineChart({ chartData }) {
  return <Line data={chartData} options={{ animations: LineChart }} />;
}

LineChart.propTypes = {
  chartData: PropTypes.objectOf.isRequired,
  /* chartData: PropTypes.object.isRequired produced
   an error in the linters, the error was:"12:3
   error  Prop type "object" is forbidden  react/forbid-prop-types" wrote */
};

export default LineChart;
