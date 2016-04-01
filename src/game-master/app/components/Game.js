import React, { Component } from 'react';

class Game extends Component {
  
  render() {
    const { onClickNext, onClickShowQuestions, onClickShowAnswers, onClickShowRanking } = this.props;
    return (
      <div>
        <h1>Challenge</h1>
        <ul>
          <li><a href="#" onClick={e => {e.preventDefault(); onClickNext(); }}> Next Question </a></li>
          <li><a href="#" onClick={e => {e.preventDefault(); onClickShowQuestions(); }}> Show Question </a></li>
          <li><a href="#" onClick={e => {e.preventDefault(); onClickShowAnswers(); }}> Show Answer </a></li>
          <li><a href="#" onClick={e => {e.preventDefault(); onClickShowRanking(); }}> How Ranking </a></li>
        </ul>
      </div>
    );
  }

}

export default Game;