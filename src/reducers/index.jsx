import { combineReducers } from 'redux';
import serials from './serials.jsx';
import movies from './movies.jsx';

const rootReducer = combineReducers({
  serials,
  movies
});

export default rootReducer;