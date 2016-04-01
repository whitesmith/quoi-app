import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';

// Create redux store
const store = configureStore();

// Mount root component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
