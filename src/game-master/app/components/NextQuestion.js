import React, { Component } from 'react';

class NextQuestion extends Component {

  render() {
    const { onClickNext, active } = this.props;
    if(active) {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClickNext(); }}> Next Question </a></li>
      )
    }
  }

}

export default NextQuestion;