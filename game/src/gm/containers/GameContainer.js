import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from '../components/Game';
import { changeGame, incrementTimer,restartTimer } from '../actions/Actions'

var interval = 0;

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.game,
    timer: state.timer
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickNext: () => {
      ownProps.socket.emit("gm_question_ready", {});
      console.log("gm_question_ready");
      dispatch(changeGame("QUESTION"));
    },
    onClickShowAnswers: () => {
      ownProps.socket.emit("gm_question_go", {});
      console.log("gm_question_go");
      dispatch(changeGame("ROUND"));
      interval = setInterval(function(){ dispatch(incrementTimer()) }, 1000);
    },
    onClickShowCorrect: () => {
      ownProps.socket.emit("gm_question_correction", {});
      console.log("gm_question_correction");
      dispatch(changeGame("READY"));
    },
    onClickShowRanking: () => {
      ownProps.socket.emit("gm_ranking_show", {});
      console.log("gm_ranking_show");
      dispatch(changeGame("READY_Q"));
    },
    onTimer: () =>{
      clearInterval(interval);
      console.log("stop_timer");
      dispatch(restartTimer());
      dispatch(changeGame("RESPONDED"));
    }
  }
};

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
