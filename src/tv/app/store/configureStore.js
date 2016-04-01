import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers';

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f // Enable redux chrome devtools extension, if installed
);

const configureStore = (initialState) => {
  return createStore(reducer, initialState, enhancer);
}

export default configureStore;
