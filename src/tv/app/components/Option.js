import React, { Component } from 'react';

/*************************
This is a PRESENTATIONAL component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

class Option extends Component {

  componentDidMount() {}

  render() {
    return <li className="answer before"><span>{this.props.text}</span></li>
  }
}

export default Option;
