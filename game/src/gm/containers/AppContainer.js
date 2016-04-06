import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import { changePage} from '../actions/Actions'

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPageChange: (newPage) => {
      dispatch(changePage(newPage))
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
