import actionTypes from '../constants/serials.jsx';

const serials = (state = [], action) => {
  switch(action.type) {

    case actionTypes.ADD_SERIAL:
      return [...state, { name: action.name, watchingType: 'to_watch' }];

    default:
      return state;
  }
};

export default serials;