import React, { Component } from 'react';

import Option from './Option';

/*************************
This is a PRESENTATIONAL component.
See this table for more info: http://redux.js.org/docs/basics/UsageWithReact.html
**************************/

class OptionList extends Component {

  isCorrectAnswer(idx) {
    const { answer, type } = this.props
    if(answer && type){
      switch (type) {
        case 'single':
          return answer[0] === idx + 1
        case 'multiple':
          return false // TODO
        case 'order':
          return false // TODO
      }
    } else {
      return false;
    }
  }

  componentDidMount() {}

  render() {
    const { options, showAnswer, showOptions } = this.props

    const optionNodes = options.map((option,i) => {
      return (
        <Option text={option} key={i}
                show={showOptions}
                correct={ showAnswer && this.isCorrectAnswer(i) } />
      )
    });

    return (
      <ul className="option-list">
        {optionNodes}
      </ul>
    )
  }
}

export default OptionList;
