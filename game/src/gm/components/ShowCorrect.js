import React, { Component } from 'react';

class ShowCorrect extends Component {

  render() {
    const { onClick, game } = this.props;
    if(game == 'RESPONDED') {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClick(); }}> Show Correct </a></li>
      )
    }
    else {
      return(
        <li> Show Correct </li>
      )
    }
  }

}

export default ShowCorrect;