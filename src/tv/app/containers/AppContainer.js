import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from '../components/App';

/*************************
This is a CONTAINER component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

const mapStateToProps = (state) => {
  return {
    state: state.state
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
