import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import { changePage} from '../actions/Actions'

var io = require('socket.io-client/socket.io');

const socket = io('http://jlbribeiro.tunnels.whitesmith.co/', {jsonp: false, transports: ['websocket']});

const mapStateToProps = (state) => {
  console.log(state.page);
  return {
    page: state.page,
    socket: socket
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPageChange: (newPage) => {
      dispatch(changePage(newPage))
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
