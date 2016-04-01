import React, { Component } from 'react';

class NextQuestion extends Component {

  render() {
    
    const { onClickNext, game } = this.props;
    console.log(game)
    if(game == 'START') {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClickNext(); }}> Next Question </a></li>
      )
    }
  }

}

export default NextQuestion;