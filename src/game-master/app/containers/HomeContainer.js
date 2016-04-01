import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { changeGame} from '../actions/Actions'
import { changePage} from '../actions/Actions'

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.game
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickNext: () => {
      ownProps.socket.emit("gm_question_ready", {});
      console.log("gm_question_ready");
      dispatch(changeGame("START"));
      dispatch(changePage("GAME"));
    }
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;