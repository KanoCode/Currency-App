import getChartData from '../components/chartData';

test('returns object', () => {
  expect(getChartData([{ date: 'today', open: 123, close: 123 }])).toBeDefined();
});
