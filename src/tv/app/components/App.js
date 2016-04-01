import React, { Component } from 'react';
import Home from './Home'
import Challenge from './Challenge'

class App extends Component {

  getCurrentChallenge() {
    return {
      round_number: 1,
      question: 'Who is the misterious man?',
      media: 'http://images.clipartpanda.com/cool-question-marks-question-marks-25cpew0.jpg',
      options: [
        'Cristiano Ronaldo',
        'Jorge Jesus',
        'Marcelo Rebelo Sousa',
        'Steve Jobs',
        'Nenhum :eggplant:'
      ]
    };
  }

  getResults(){
    return [
      // TBD
    ]
  }

  componentDidMount() {
    const { socket, onPageChange } = this.props;
    socket.emit("login_game_master", {});
    // socket.on('game_wait_start', () => {
      onPageChange('CHALLENGE')
    // });
  }

  render() {
    const { page, socket } = this.props;

    switch(page) {
      case 'HOME':
        return <Home socket={socket} />
      case 'CHALLENGE':
        return <Challenge data={this.getCurrentChallenge()}/>
      case 'RESULTS':
        return <Results data={this.getResults()}/>
    }
  }
}

export default App;
