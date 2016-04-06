import React, { Component } from 'react';

class ShowTimer extends Component {

  render() {
    const { timer } = this.props;
    return(
      <li>{timer}</li>
    )
  }

  componentDidUpdate() {
    const { onTimer, timer, game} = this.props;
    if(timer == 0 && game == 'ROUND') {
      onTimer();
    }
  }

}

export default ShowTimer;