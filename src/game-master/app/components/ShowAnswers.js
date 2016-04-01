import React, { Component } from 'react';

class ShowAnswers extends Component {

  render() {
    const { onClickShowAnswers, game } = this.props;
    if(game == 'START') {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClickShowAnswers(); }}> Show Answers </a></li>
      )
    }
  }

}

export default ShowAnswers;