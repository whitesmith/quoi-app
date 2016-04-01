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
        <div className="information">
          <p>{this.props.name}</p>
          <p>{this.props.score}</p>
        </div>
      </div>
    )
  }
}

export default Result;
