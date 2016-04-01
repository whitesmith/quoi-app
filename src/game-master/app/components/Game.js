import React, { Component } from 'react';
import { NextQuestion } from './NextQuestion'
import { ShowAnswers } from './ShowAnswers'
import { ShowCorrect } from './ShowCorrect'
import { ShowRanking } from './ShowRanking'

class Game extends Component {
  
  render() {
    const { onClickNext, onClickShowAnswers, onClickShowCorrect, onClickShowRanking, game } = this.props;
    console.log(game)
    return (
      <div>
        <h1>Challenge</h1>
        <ul>
          <li><a href="#" onClick={e => {e.preventDefault(); onClickNext(); }}> Next Question </a></li>
          <li><a href="#" onClick={e => {e.preventDefault(); onClickShowAnswers(); }}> Show Answers </a></li>
          <li><a href="#" onClick={e => {e.preventDefault(); onClickShowCorrect(); }}> Show Correct </a></li>
          <li><a href="#" onClick={e => {e.preventDefault(); onClickShowRanking(); }}> How Ranking </a></li>
        </ul>
      </div>
    );
  }

}

export default Game;