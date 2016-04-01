import React, { Component } from 'react';
import { connect } from 'react-redux';

import Challenge from '../components/Challenge';

import { challengeShowOptions } from '../actions/Actions'

const mapStateToProps = (state, ownProps) => {
  return {
    showOptions: state.challenge.showOptions
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    challengeShowOptions: () => {
      dispatch(challengeShowOptions())
    }
  }
}

const ChallengeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenge);

export default ChallengeContainer;
