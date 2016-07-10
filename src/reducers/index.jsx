import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import serials from './serials.jsx';
import movies from './movies.jsx';

const rootReducer = combineReducers({
  routing: routerReducer,
  serials,
  movies
});

export default rootReducer;