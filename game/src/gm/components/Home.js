import React, { Component } from 'react';

import PapaParse from '../lib/papaparse.min.js';

const QUESTION_N_COLUMNS = 9;

class Home extends Component {

  /*getInitialState() {
    return {
      data_uri: null
    }
  }*/

  handleQuestionsFile(e) {
    const { socket } = this.props;

    let file = e.target.files[0];

    PapaParse.parse(file, {
      complete: (parsed) => {
        if (parsed.data.length === 0) {
          /* FIXME: throw error */
          return;
        }

        let questions = [];
        for (let row of parsed.data) {
          if (row.length !== QUESTION_N_COLUMNS) {
            console.log('Skipping row with invalid number of columns.');
            continue;
          }

          let [questionType, question, media, ,,,,, answer] = row;
          answer = answer.split(',').map(n => parseInt(n, 10) ); /* answer is a comma-separated array */
          let options = row.slice(3, 8);

          if (questionType === 'question_type') {
            console.log('Skipping header row');
            continue;
          }

          questions.push({
            type: questionType,
            question: question,
            media: media,
            options: options,
            answer: answer
          });
        }

        /* Add id */
        for (let i = 0; i < questions.length; i++) {
          questions[i].id = i;
        }

        socket.emit("gm_questions_set", { data: questions });
      }
    });
  }

  componentDidMount() {
    const { socket } = this.props;
    socket.emit("gm_login", {}, (err) => {
      /* FIXME: handle the error properly! */
      if (err) {
        console.error(err);
        return;
      }

      console.log("gm_login");
    });
  }
  
  render() {
    const { onClickNext } = this.props;
    return (
      <div>
        <input type="file" onChange={e => { this.handleQuestionsFile(e) }} />
        <h1>Home</h1>
        <h2>Wait for all players!</h2>
        <a href="#" onClick={e => {e.preventDefault(); onClickNext(); }}> Start </a>
      </div>
    );
  }

}

export default Home;
