import React, { Component } from 'react';

class ShowTimer extends Component {

  componentDidUpdate() {
    const { onTimer, timer, start } = this.props;
    if(timer == 0 && start) {
      onTimer();
    }
  }

  render() {
    const { timer } = this.props;
    return(
      <h2 className="timer">{timer}</h2>
    )
  }

}

export default ShowTimer;
