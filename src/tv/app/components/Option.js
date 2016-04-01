import React, { Component } from 'react';

/*************************
This is a PRESENTATIONAL component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

class Option extends Component {

  componentDidMount() {}

  render() {
    const { text, show, correct } = this.props
    var className = "answer";
    if (show) {
      className = className.concat(" after")
    } else {
      className = className.concat(" before")
    }
    if (correct){
      className = className.concat(" correct")
    }
    return (
      // before - show no text
      // after - show text
      // correct - correct answer
      <li className={className}><span>{text}</span></li>
    )
  }
}

export default Option;
