import React, { Component } from 'react';

class Result extends Component {

  componentDidMount() {}

  render() {
    return (
      <div className="result">
        <img src={this.props.photo}></img>
        <span>{this.props.name}</span>
        <strong>{this.props.score}</strong>
      </div>
    )
  }
}

export default Result;
