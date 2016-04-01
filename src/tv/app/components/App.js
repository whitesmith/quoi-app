import React, { Component } from 'react';
import Home from './Home'
import Challenge from './Challenge'

class App extends Component {

  componentDidMount() {
    const { socket, onPageChange } = this.props;
    socket.on('game_wait_start', () => {onPageChange()});
    socket.emit("login_game_master", {});
  }

  render() {
    const { page, socket } = this.props;
    
    if(page == 'HOME') {
      return <Home socket={socket} />
    }
    if(page == 'CHALLENGE') {
      return <Challenge />
    }
    //return <Home socket={socket}/>
  }
}

export default App;
