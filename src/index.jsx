import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './configureStore.jsx';
import Routes from './routes.jsx';

const store = configureStore();

render(
  <Provider store={ store }>
    <Routes store={ store } />
  </Provider>,
  document.querySelector('.root')
);