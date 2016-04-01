import React, { Component } from 'react';

class ShowCorrect extends Component {

  render() {
    const { onClickShowCorrect, game } = this.props;
    if(game == 'START') {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClickShowCorrect(); }}> Show Correct </a></li>
      )
    }
  }

}

export default ShowCorrect;