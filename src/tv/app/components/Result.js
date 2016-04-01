import React, { Component } from 'react';

class Result extends Component {

  componentDidMount() {}

  render() {
    return (
      <div className="result">
        <img src={this.props.photo}></img>
        <div className="information">
          <p>{this.props.name}</p>
          <p>{this.props.score}</p>
        </div>
      </div>
    )
  }
}

export default Result;
