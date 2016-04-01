import React, { Component } from 'react';

/*************************
 This is a PRESENTATIONAL component.
 See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
 **************************/

class Home extends Component {

    componentDidMount() {
      const { socket } = this.props;
      if (socket) {
        socket.emit("login", {});
      }
    }

    render() {
        return <h1>Hello World</h1>
    }
}

export default Home;
