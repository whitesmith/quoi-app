import React, { Component } from 'react';

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
    socket.emit("gm_login", {}, (err) => {console.log("gm_login")});
  }
  
  render() {
    const { onClickNext } = this.props;
    return (
    //  <form onSubmit={this.handleSubmit()} encType="multipart/form-data">
    //    <input type="file" onChange={this.handleFile()} />
    //  </form>
      <div>
        <h1>Home</h1>
        <a href="#" onClick={e => {e.preventDefault(); onClickNext(); }}> Start </a>
      </div>
    );
  }

}

export default Home;