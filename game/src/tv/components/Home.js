import React, { Component } from 'react';

class Home extends Component {

  render() {
    // TODO: once connected to server, change text to "Waiting for players"
    // TODO: Show how many players have connected
    return (
      <div className="wrapper">
        <div className="background"> </div>
        <div className="home">
          <h1>QUOI</h1>
          <h3>Connecting...</h3>
        </div>
      </div>
    )
  }
}

export default Home;
