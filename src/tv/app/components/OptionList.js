import React, { Component } from 'react';

import Option from './Option';

/*************************
This is a PRESENTATIONAL component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

class OptionList extends Component {

  componentDidMount() {}

  render() {
    const optionNodes = this.props.options.map((option,i) => {
      return <Option text={option} key={i}/>
    });
    return (
      <ul className="option-list">
        {optionNodes}
      </ul>
    )
  }
}

export default OptionList;
