import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App.jsx';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App } />
    </Router>
  </Provider>,
  document.querySelector('.root')
);