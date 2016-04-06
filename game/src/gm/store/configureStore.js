import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import gmReducers from '../reducers';

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f // Enable redux chrome devtools extension, if installed
);

const gmConfigureStore = (initialState) => {
  return createStore(gmReducers, initialState, enhancer);
}

export default gmConfigureStore;

