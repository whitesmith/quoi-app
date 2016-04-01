import React, { Component } from 'react';
import Home from './Home'

/*************************
This is a PRESENTATIONAL component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

class App extends Component {

  componentDidMount() {
  }

  render() {
    const { state, socket } = this.props;
    if(state == 'HOME') {
      return <Home socket={socket}/>
    }
    if(state == 'CHALLENGE') {
      return <ChallengeContainer />
    }
    return <Home socket={socket}/>
  }
}

export default App;
