import React, { Component } from 'react';

class NextQuestion extends Component {

  render() {
    const { onClick, game } = this.props;
    if(game == 'READY' || game == 'READY_Q') {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClick(); }}> Next Question </a></li>
      )
    }
    else {
      return(
        <li> Next Question </li>
      )
    }
  }

}

export default NextQuestion;