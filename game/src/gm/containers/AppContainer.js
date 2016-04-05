import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import { changePage} from '../actions/Actions'

var io = require('socket.io-client/socket.io');
const socket = io('192.168.2.16:3000', {jsonp: false, transports: ['websocket']});

const mapStateToProps = (state) => {
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
