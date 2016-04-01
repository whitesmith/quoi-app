import React, { Component } from 'react';

/*************************
This is a PRESENTATIONAL component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

class Option extends Component {

  componentDidMount() {
    const { onNewMessage } = this.props;
    onNewMessage();
  }

  render() {
    const { message } = this.props;
    return <li>{message}</li>
  }
}

export default Option;
