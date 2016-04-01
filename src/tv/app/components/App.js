import React, { Component } from 'react';

/*************************
This is a PRESENTATIONAL component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

class App extends Component {

  componentDidMount() {
  }

  render() {
    const { state } = this.props;
    if(state == 'HOME') {
      return <Home />
    }
    if(state == 'CHALLENGE') {
      return <ChallengeContainer />
    }
    return <Home />
  }
}

export default App;
