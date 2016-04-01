import React, { Component } from 'react';
import Result from './Result'

// The Results consist of an array of objects with the format:
// Assumes the array is already ordered
// {
//   name: string
//   pic: string
//   score: integer
// }

class ResultList extends Component {

  render() {
    const { data = [] } = this.props
    const playerNodes = data.map((player,i) => {
      return <Result key={i}
                     name={player.name}
                     photo={player.pic}
                     score={player.score}/>
    });
    return (
      <div className="wrapper">
        <div className="background"></div>
        <div className="container score-list">
          <h2>Results</h2>
          <div className="result-list">
            {playerNodes}
          </div>
        </div>
      </div>
    )
  }
}

export default ResultList;
