import React, { Component } from 'react';

const questions = [
  {
    id: 0,
    type: 'single',
    question: 'Quem é o maior?',
    media: '',
    options: [
      'O Benfica.',
      'O Sporting.',
      'A grande Briosa!',
      '"Sou eu, o Ricardo!"',
      'Diogo Lucas!'
    ],
    answer: [3]
  },
  {
    id: 1,
    type: 'single',
    question: 'Quem é o menor?',
    media: '',
    options: [
      'O Benfica.',
      'O Sporting.',
      'A grande Briosa!',
      '"Sou eu, o Ricardo!"',
      'Diogo Lucas!'
    ],
    answer: [1]
  },
  {
    id: 2,
    type: 'single',
    question: 'Quem é o médio?',
    media: '',
    options: [
      'O Benfica.',
      'O Sporting.',
      'A grande Briosa!',
      '"Sou eu, o Ricardo!"',
      'Diogo Lucas!'
    ],
    answer: [4]
  }
];

class Home extends Component {

  /*getInitialState() {
    return {
      data_uri: null
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  };

  handleFile(e) {
    console.log("Here");
    var self = this;
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = function (upload) {
      self.setState({
        data_uri: upload.target.result
      });
    };
    reader.readAsDataURL(file);
  }*/

  componentDidMount() {
    const { socket } = this.props;
    socket.emit("gm_login", {}, (err) => {
      /* FIXME: handle the error properly! */
      if (err) {
        console.error(err);
        return;
      }

      console.log("gm_login");

      /* FIXME: this shouldn't occur here. */
      socket.emit("gm_questions_set", questions);
    });
  }
  
  render() {
    const { onClickNext } = this.props;
    return (
    //  <form onSubmit={this.handleSubmit()} encType="multipart/form-data">
    //    <input type="file" onChange={this.handleFile()} />
    //  </form>
      <div>
        <h1>Home</h1>
        <h2>Wait for all players!</h2>
        <a href="#" onClick={e => {e.preventDefault(); onClickNext(); }}> Start </a>
      </div>
    );
  }

}

export default Home;
