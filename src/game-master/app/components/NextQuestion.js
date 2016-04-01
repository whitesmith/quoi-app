import React, { Component } from 'react';

class NextQuestion extends Component {

  render() {
    const { onClick, game } = this.props;
    if(game == 'START') {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClick(); }}> Next Question </a></li>
      )
    }
  }

}

export default NextQuestion;