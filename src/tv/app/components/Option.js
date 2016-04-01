import React, { Component } from 'react';

/*************************
This is a PRESENTATIONAL component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

class Option extends Component {

  componentDidMount() {}

  render() {

    const { text, highlight } = this.props
    return (
      //before - show no text -- after - show text -- correct - correct answer
      <li className={highlight ? 'answer' : ''}><span>{text}</span></li>
    )
  }
}

export default Option;
