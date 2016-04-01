import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
import io from 'socket.io-client/socket.io';

const socket = io('http://jlbribeiro.tunnels.whitesmith.co/', {jsonp: false});

/*************************
This is a CONTAINER component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

const mapStateToProps = (state) => {
  return {
    state: state.state,
    socket: socket,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
