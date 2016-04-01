import React, { Component } from 'react';

/*************************
This is a PRESENTATIONAL component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

class Question extends Component {

  componentDidMount() {
    const { onNewMessage } = this.props;
    onNewMessage();
  }

  render() {
    const { message } = this.props;
    return <h1>{message}</h1>
  }
}

export default Question;
