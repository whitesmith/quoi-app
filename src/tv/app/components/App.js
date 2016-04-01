import React, { Component } from 'react';
import Home from './Home'
import ChallengeContainer from '../containers/ChallengeContainer'
import ResultList from './ResultList'

class App extends Component {

  setCurrentChallenge(challenge){
    this.currentChallenge = challenge;
  }

  getCurrentChallenge() {
    return this.currentChallenge;
  }

  getResults(){
    return [
      { name: 'PlayerA', 'pic': 'http://thecatapi.com/api/images/get?format=src', score: 5 },
      { name: 'PlayerB', 'pic': 'http://thecatapi.com/api/images/get?format=src', score: 2 },
      { name: 'PlayerC', 'pic': 'http://thecatapi.com/api/images/get?format=src', score: -1 }
    ]
  }

  componentDidMount() {
    const { socket, onPageChange } = this.props;
    socket.emit("login_game_master", {});
    socket.on('tv_question_ready', (payload) => {
      this.setCurrentChallenge(payload);
      onPageChange('CHALLENGE');
    });
  }

  render() {
    const { page, socket } = this.props;

    switch(page) {
      case 'HOME':
        return <Home socket={socket} />
      case 'CHALLENGE':
        return <ChallengeContainer data={this.getCurrentChallenge()} socket={socket}/>
      case 'RESULTS':
        return <ResultList data={this.getResults()}/>
    }
  }
}

export default App;
