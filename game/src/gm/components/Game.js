import React, { Component } from 'react';
import NextQuestion from './NextQuestion'
import ShowAnswers from './ShowAnswers'
import ShowCorrect from './ShowCorrect'
import ShowRanking from './ShowRanking'
import ShowTimer from './ShowTimer'

class Game extends Component {
  
  render() {
    const { onTimer, onClickNext, onClickShowAnswers, onClickShowCorrect, onClickShowRanking, game, timer } = this.props;
    return (
      <div className="challenge">
        <NextQuestion className="nextQuestion" onClick={onClickNext} game={game}/>
        <ShowAnswers className="showAnswers" onClick={onClickShowAnswers} game={game}/>
        <ShowCorrect className="showCorrect" onClick={onClickShowCorrect} game={game}/>
        <ShowRanking className="showRanking" onClick={onClickShowRanking} game={game}/>
        <ShowTimer className="showTimer" onTimer={onTimer} timer={timer} game={game}/>
      </div>
    )
  }
}

export default Game;