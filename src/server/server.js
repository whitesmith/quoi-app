import Player from "./player";
import Question, { QUESTION_TYPE } from "./question";

class Server {
  constructor(io, questions = []) {
    this._io = io;

    this._questions = questions;
    this._questionNo = -1;
    this._players = [];

    this._io.on('connect', (...args) => {
      this.onConnect(...args);
    });
  }

  onConnect(socket) {
    socket.on('login', (playerInfo) => {
      let player = new Player(playerInfo);
      this._players.push(player);

      socket.join('players');
      socket.emit('wait_game');

      socket.on('answer', (answerInfo) => {
        /* FIXME: Using `let`; is player defined here? */
      });
    });
  }
}

export default Server;
