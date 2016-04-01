import React, { Component } from 'react';

/*************************
This is a PRESENTATIONAL component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

class Question extends Component {

  componentDidMount() {}

  render() {
    return (
      <h1 className="question">{this.props.text}</h1>
    )
  }
}

export default Question;
