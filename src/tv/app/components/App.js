import React, { Component } from 'react';
import Home from './Home'
import Challenge from './Challenge'
import ResultList from './ResultList'

class App extends Component {

  getCurrentChallenge() {
    return {
      id: 1,
      question_type: '',
      question: 'Who is the misterious man?',
      media: 'http://images.clipartpanda.com/cool-question-marks-question-marks-25cpew0.jpg',
      options: [
        'Cristiano Ronaldo',
        'Jorge Jesus',
        'Marcelo Rebelo Sousa',
        'Steve Jobs',
        'Nenhum :eggplant:'
      ],
      answer: []
    };
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
        return <ResultList data={this.getResults()}/>
    }
  }
}

export default App;
