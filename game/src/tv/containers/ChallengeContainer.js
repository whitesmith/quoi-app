import React, { Component } from 'react';
import { connect } from 'react-redux';

import Challenge from '../components/Challenge';

import { challengeShowOptions,challengeShowAnswer } from '../actions/Actions'
import { incrementTimer, restartTimer } from '../actions/Actions'

var interval = 0;

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.page.data,
    showOptions: state.challenge.showOptions,
    showAnswer: state.challenge.showAnswer,
    timer: state.timer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    challengeShowOptions: () => {
      dispatch(challengeShowOptions())
      dispatch(restartTimer());
      clearInterval(interval);
      interval = setInterval(function(){ dispatch(incrementTimer()) }, 1000);
    },
    challengeShowAnswer: () => {
      dispatch(challengeShowAnswer())
    },
    onTimer: () => {
      clearInterval(interval);
      console.log("stop_timer");
      dispatch(restartTimer());
    }
  }
}

const ChallengeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenge);

export default ChallengeContainer;
