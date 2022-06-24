import React from 'react';
import Renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store/configureStore';
import App from '../App';

test('renders learn react link', () => {
  const tree = Renderer
    .create(
      <BrowserRouter>
        {' '}
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
