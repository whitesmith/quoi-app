import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from '../components/Game';

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.game,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickNext: () => {ownProps.socket.emit("gm_question_ready", {});console.log("gm_question_ready")},
    onClickShowQuestions: () => {ownProps.socket.emit("gm_question_go", {});console.log("gm_question_go")},
    onClickShowAnswers: () => {ownProps.socket.emit("gm_question_correction", {});console.log("gm_question_correction")},
    onClickShowRanking: () => {ownProps.socket.emit("gm_ranking_show", {});console.log("gm_ranking_show")}
  }
};

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
