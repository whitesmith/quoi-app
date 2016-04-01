import React, { Component } from 'react';
import Question from './Question'
import Media from './Media'
import OptionList from './OptionList'

// Challenge consists of:
// {
//   id: integer - question number
//   question_type: string - Once of ['single', 'multiple', 'order']
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
    socket.on('tv_question_correction', () => {
      this.props.challengeShowAnswer()
    })

    // Without a server, manually trigger events
    // setTimeout(this.props.challengeShowOptions, 500);
    // setTimeout(this.props.challengeShowAnswer, 2000);
  }

  render() {
    const { page, socket, data, showOptions, showAnswer } = this.props;
    return (
      <div className="wrapper background">
        <div className="challenge">
          <Media src={data.media}/>
          <Question text={data.question}/>
          <OptionList options={showOptions ? data.options : []}
                      type={data.type}
                      answer={data.answer}
                      showAnswer={showAnswer}/>
        </div>
      </div>
    )
  }
}

export default Challenge;
