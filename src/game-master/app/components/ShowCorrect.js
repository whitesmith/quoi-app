import React, { Component } from 'react';

class ShowCorrect extends Component {

  render() {
    const { onClick, game } = this.props;
    if(game == 'START') {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClick(); }}> Show Correct </a></li>
      )
    }
  }

}

export default ShowCorrect;