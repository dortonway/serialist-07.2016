import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';
import App from './App.jsx';

render(
  <Provider store={ configureStore() }>
    <App />
  </Provider>,
  document.querySelector('.root')
);