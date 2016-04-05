import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import { changePage } from '../actions/Actions'

const mapStateToProps = (state, ownProps) => {
  return {
    page: state.page
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPageChange: (newPage, data) => {
      dispatch(changePage(newPage, data))
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
