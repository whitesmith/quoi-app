import React, { Component } from 'react';
import Home from './Home'
import ChallengeContainer from '../containers/ChallengeContainer'
import ResultListContainer from '../containers/ResultListContainer'

class App extends Component {

  mockChallenge() {
   return {
      id: 1,
      type: 'single',
      question: 'Who is the misterious man?',
      media: 'http://images.clipartpanda.com/cool-question-marks-question-marks-25cpew0.jpg',
      options: [
        'Cristiano Ronaldo',
        'Jorge Jesus',
        'Marcelo Rebelo Sousa',
        'Steve Jobs',
        'Nenhum :eggplant:'
      ],
      answer: [5]
    }
  }

  mockResults(){
    return [
      { name: 'PlayerA', 'pic': 'http://thecatapi.com/api/images/get?format=src', score: 5 },
      { name: 'PlayerB', 'pic': 'http://thecatapi.com/api/images/get?format=src', score: 2 },
      { name: 'PlayerC', 'pic': 'http://thecatapi.com/api/images/get?format=src', score: -1 }
    ]
  }

  componentDidMount() {
    const { socket, onPageChange } = this.props;

    // With a server
    socket.emit("tv_login", {});
    socket.on('tv_question_ready', (payload) => {
      console.log("--- tv_question_ready", payload)
      onPageChange('CHALLENGE', payload);
    });
    socket.on('tv_ranking_show', (payload) => {
      console.log("--- tv_ranking_show", payload)
      onPageChange('RESULTS', payload.data);
    });

    // Without a server
    // onPageChange('CHALLENGE', this.mockChallenge());
    // onPageChange('RESULTS', this.mockResults());
  }

  render() {
    const { page, socket } = this.props;
    switch(page.name) {
      case 'HOME':
        return <Home socket={socket} />
      case 'CHALLENGE':
        return <ChallengeContainer socket={socket}/>
      case 'RESULTS':
        return <ResultListContainer />
    }
  }
}

export default App;
