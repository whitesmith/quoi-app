import React, { Component } from 'react';
import Question from './Question'
import Media from './Media'
import OptionList from './OptionList'

class Challenge extends Component {

  render() {
    return (
      <div className="challenge">
        <h1>Challenger approaches</h1>
        <Question text={this.props.data.question}/>
        <Media src={this.props.data.media}/>
        <OptionList options={this.props.data.options}/>
      </div>
    )
  }
}

export default Challenge;
