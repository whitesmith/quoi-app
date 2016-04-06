import React, { Component } from 'react';
import Question from './Question'
import Media from './Media'
import OptionList from './OptionList'
import ShowTimer from './ShowTimer'

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
      console.log("--- tv_question_go")
      this.props.challengeShowOptions()
    })
    socket.on('tv_question_correction', () => {
      console.log("--- tv_question_go")
      this.props.challengeShowAnswer()
    })

    // Without a server, manually trigger events
    // setTimeout(this.props.challengeShowOptions, 1000);
    // setTimeout(this.props.challengeShowAnswer, 2000);
  }

  render() {
    const { data, showOptions, showAnswer } = this.props;
    const { onTimer, timer } = this.props;
    return (
      <div className="wrapper">
        <div className="background">
          <div className="container">
            <div className="challenge">
              <Question text={data.question}/>
              <div className="answers-container">
                <Media src={data.media}/>
                <OptionList options={data.options}
                            showOptions={showOptions}
                            type={data.type}
                            answer={data.answer}
                            showAnswer={showAnswer}/>
              </div>
              <ShowTimer className="showTimer"
                         onTimer={onTimer}
                         timer={timer}
                         start={showOptions}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Challenge;
