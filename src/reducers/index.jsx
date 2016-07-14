import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import serials from './serials.jsx';
import movies from './movies.jsx';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  serials,
  movies
});

export default rootReducer;