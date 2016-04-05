import React, { Component } from 'react';

class Result extends Component {

  componentDidMount() {}

  render() {
    var className = "result";
    if(this.props.winner){
      className = className.concat(" winner");
    }
    var img = this.props.photo;
    if (!img){
      img = "http://thecatapi.com/api/images/get?format=src"
    }
    return (
      <div className={className}>
        <img src={img}></img>
        <div className="information">
          <p>{this.props.name}</p>
          <p>{this.props.score}</p>
        </div>
      </div>
    )
  }
}

export default Result;
