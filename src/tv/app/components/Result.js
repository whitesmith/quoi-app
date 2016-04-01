import React, { Component } from 'react';

class Result extends Component {

  componentDidMount() {}

  render() {
    var className = "result";
    if(this.props.winner){
      className = className.concat(" winner");
    }
    return (
      <div className={className}>
        <img src={this.props.photo}></img>
        <span>{this.props.name}</span>
        <strong>{this.props.score}</strong>
      </div>
    )
  }
}

export default Result;
