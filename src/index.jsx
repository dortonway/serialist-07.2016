import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './containers/App.jsx';
import Serials from './containers/Serials.jsx';
import Movies from './containers/Movies.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route component={ App }>
        <Redirect from="/" to="/serials" />
        <Route path="/serials" component={ Serials } />
        <Route path="/movies" component={ Movies } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.root')
);