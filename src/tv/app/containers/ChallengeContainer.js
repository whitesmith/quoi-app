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
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNewMessage: () => {
    }
  }
}

const ChallengeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenge);

export default ChallengeContainer;
