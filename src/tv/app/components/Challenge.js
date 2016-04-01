import React, { Component } from 'react';
import Question from './Question'
import Media from './Media'
import OptionList from './OptionList'

class Challenge extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="challenge">
          <Media src={this.props.data.media}/>
          <Question text={this.props.data.question}/>
          <OptionList options={this.props.data.options}/>
        </div>
      </div>
    )
  }
}

export default Challenge;
