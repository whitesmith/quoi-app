import React, { Component } from 'react';
import { connect } from 'react-redux';

import Challenge from '../components/Challenge';

import { challengeShowOptions,challengeShowAnswer } from '../actions/Actions'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.page.data,
    showOptions: state.challenge.showOptions,
    showAnswer: state.challenge.showAnswer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    challengeShowOptions: () => {
      dispatch(challengeShowOptions())
    },
    challengeShowAnswer: () => {
      dispatch(challengeShowAnswer())
    }
  }
}

const ChallengeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenge);

export default ChallengeContainer;
