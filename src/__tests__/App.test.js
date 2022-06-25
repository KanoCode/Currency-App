import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store/configureStore';
import App from '../App';

it('When page loads', () => {
  render(
    <BrowserRouter>
      {' '}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
  const heading = screen.getByRole('heading', { name: /stock data/i });
  expect(heading).toBeInTheDocument();
});
