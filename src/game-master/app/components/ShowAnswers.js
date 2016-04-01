import React, { Component } from 'react';

class ShowAnswers extends Component {

  render() {
    const { onClick, game } = this.props;
    if(game == 'QUESTION') {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClick(); }}> Show Answers </a></li>
      )
    }
    else {
      return(
        <li> Show Answers </li>
      )
    }
  }

}

export default ShowAnswers;