import React, { Component } from 'react';

class ShowAnswers extends Component {

  render() {
    const { onClick, game } = this.props;
    if(game == 'START') {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClick(); }}> Show Answers </a></li>
      )
    }
  }

}

export default ShowAnswers;