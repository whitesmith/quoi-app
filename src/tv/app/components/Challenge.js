import React, { Component } from 'react';
import Question from './Question'
import Media from './Media'
import OptionList from './OptionList'

// Challenge consists of:
// {
//   id: integer - question number
//   question_type: string - Once of ['single', 'multiple', order]
//   question: string - the question
//   media: string - source for media (image, video, etc.)
//   options: [ string ] - list of possible answers
//   answer: [ integer ] - the index (1 based) to the correct answer(s)
// };

class Challenge extends Component {

  componentDidMount(){
    const { socket, onPageChange } = this.props;
    socket.on('tv_question_go', () => {
      this.props.challengeShowOptions()
    })
  }

  render() {
    return (
      <div className="wrapper">
       <div className="background"> </div>
       <div className="container">
        <div className="challenge">       
          <Question text={this.props.data.question}/>   
          <div className="answers-container">
            <Media src={this.props.data.media}/>
            <OptionList options={this.props.data.options}/>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Challenge;
