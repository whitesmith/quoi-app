import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import tvReducers from '../reducers';

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f // Enable redux chrome devtools extension, if installed
);

const tvConfigureStore = (initialState) => {
  return createStore(tvReducers, initialState, enhancer);
}

export default tvConfigureStore;

