import React, { Component } from 'react';
import Result from './Result'

class Results extends Component {

  render() {
    const playerNodes = this.props.data.map((player,i) => {
      return <Result key={i}
                     name={player.name}
                     photo={player.pic}
                     score={player.score}/>
    });
    return (
      <div>
        <h1>Results</h1>
        <div className="result-list">
          {playerNodes}
        </div>
      </div>
    )
  }
}

export default Results;
