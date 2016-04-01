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
      <li className={highlight ? 'highlight' : ''}>{text}</li>
    )
  }
}

export default Option;
