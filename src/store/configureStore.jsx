import { createStore } from 'redux';
import rootReducer from '../reducers/index.jsx';

const configureStore = () => {
  const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

  module.hot.accept('../reducers/index.jsx', () => {
    const nextReducer = require('../reducers/index.jsx').default;
    store.replaceReducer(nextReducer);
  });

  return store;
};

export default configureStore;