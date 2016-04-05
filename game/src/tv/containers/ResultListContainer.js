import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultList from '../components/ResultList';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.page.data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const ResultListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultList);

export default ResultListContainer;
