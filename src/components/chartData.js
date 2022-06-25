/* eslint-disable import/prefer-default-export */

const getChartData = (arr) => ({
  labels: arr.map((data) => data.date),
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

export default getChartData;
