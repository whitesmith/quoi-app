import Config from "./config";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import tvConfigureStore from './tv/store/configureStore';
import AppTVContainer from './tv/containers/AppContainer';

import gmConfigureStore from './gm/store/configureStore';
import AppGMContainer from './gm/containers/AppContainer';

// Open socket to server
var io = require('socket.io-client/socket.io');
const socket = io(Config.socketio.url(),{jsonp: false, transports: ['websocket']});

// Mount root component in the DOM
if (document.getElementById('tv-app')) {
  ReactDOM.render(
    <Provider store={tvConfigureStore()}>
      <AppTVContainer socket={socket} />
    </Provider>,
    document.getElementById('tv-app')
  );
}

if(document.getElementById('game-master-app')) {
  ReactDOM.render(
    <Provider store={gmConfigureStore()}>
      <AppGMContainer socket={socket}/>
    </Provider>,
    document.getElementById('game-master-app')
  );
}

export default {};
