import React, { Component } from 'react';

/*************************
This is a PRESENTATIONAL component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

class Media extends Component {

  componentDidMount() {}

  render() {
    return (
      <img width="150px" className="media"
           src={this.props.src}>
      </img>
    )
  }
}

export default Media;
