import React, { Component } from 'react';
import Home from './Home'
import ChallengeContainer from '../containers/ChallengeContainer'
import ResultList from './ResultList'

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

  setCurrentChallenge(challenge){
    this.currentChallenge = challenge;
  }

  getCurrentChallenge() {
    return this.currentChallenge;
  }

  mockResults(){
    return [
      { name: 'PlayerA', 'pic': 'http://thecatapi.com/api/images/get?format=src', score: 5 },
      { name: 'PlayerB', 'pic': 'http://thecatapi.com/api/images/get?format=src', score: 2 },
      { name: 'PlayerC', 'pic': 'http://thecatapi.com/api/images/get?format=src', score: -1 }
    ]
  }

  setResults(results){
    this.results = results;
  }

  getResults(){
    return this.results;
  }

  componentDidMount() {
    const { socket, onPageChange } = this.props;

    // With a server
    socket.emit("tv_login", {});
    socket.on('tv_question_ready', (payload) => {
      this.setCurrentChallenge(payload);
      onPageChange('CHALLENGE');
    });
    socket.on('tv_ranking_show', (payload) => {
      this.setResults(payload.data);
      onPageChange('RESULTS');
    });

    // Without a server
    // this.setCurrentChallenge(this.mockChallenge());
    // onPageChange('CHALLENGE');

    // this.setResults(this.mockResults());
    // onPageChange('RESULTS');
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
