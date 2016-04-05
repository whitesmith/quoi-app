import Config from "./config";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';

// Open socket to server
var io = require('socket.io-client/socket.io');
const socket = io(Config.socketio.url(),{jsonp: false, transports: ['websocket']});

// Create redux store
const store = configureStore();

// Mount root component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <AppContainer socket={socket} />
  </Provider>,
  document.getElementById('tv-app')
);
