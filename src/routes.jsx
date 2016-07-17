import React, { PropTypes } from 'react';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App/App.jsx';
import Serials from './containers/Serials.jsx';
import Movies from './containers/Movies.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import ToWatch from './components/ToWatch/ToWatch.jsx';
import InProgress from './components/InProgress/InProgress.jsx';
import Watched from './components/Watched/Watched.jsx';

const Routes = ({
    store
  }) => (
    <Router history={ syncHistoryWithStore(browserHistory, store) }>
      <Route component={ App }>
        <Redirect from="/" to="/serials" />
        <Route path="serials" component={ Serials }>
          <Route path="to-watch" component={ ToWatch } />
          <Route path="in-progress" component={ InProgress } />
          <Route path="watched" component={ Watched } />
        </Route>
        <Route path="/movies" component={ Movies } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
);

Routes.PropTypes = {
  store: PropTypes.object.isRequired
};

export default Routes;