import React, { Component } from 'react';
import HomeContainer from '../containers/HomeContainer'
import GameContainer from '../containers/GameContainer'

class App extends Component {
  
  render() {
    const { page, socket } = this.props;
    switch(page) {
      case 'HOME':
        return <HomeContainer socket={socket} />;
      case 'GAME':
        return <GameContainer socket={socket} />
    }
  }
}

export default App;
