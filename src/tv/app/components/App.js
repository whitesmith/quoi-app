import React, { Component } from 'react';
import Home from './Home'
import Challenge from './Challenge'

class App extends Component {

  componentDidMount() {
    const { socket, onPageChange } = this.props;
    socket.emit("login_game_master", {});
    socket.on('game_wait_start', () => {
      onPageChange()
    });
  }

  render() {
    const { page, socket } = this.props;

    if(page == 'HOME') {
      return <Home socket={socket} />
    }
    if(page == 'CHALLENGE') {
      const data = {
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
      return <Challenge data={data}/>
    }
    //return <Home socket={socket}/>
  }
}

export default App;
