import { imgUrlGenerator } from '../components/Utils/API';

test('returns string', () => {
  expect(imgUrlGenerator('MSFT')).toBe('https://financialmodelingprep.com/image-stock/MSFT.png');
});
