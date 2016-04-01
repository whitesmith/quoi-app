import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newMessage } from '../actions/Actions';
import App from '../components/App';

/*************************
This is a CONTAINER component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNewMessage: () => {
      dispatch(newMessage("Hello World!"));
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
