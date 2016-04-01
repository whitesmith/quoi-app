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
    /* TODO: for now admin logins won't be authenticated.
     * Some kind of authentication should be performed between the two apps and
     * the server. */
    socket.on('login_game_master', (...args) => { this.onGameMasterLogin(socket, ...args) });

    socket.on('login', (...args) => { this.onPlayerLogin(socket, ...args) });
  }

  onGameMasterLogin(socket) {
    socket.join('game_master');
  }

  onPlayerLogin(socket, playerInfo) {
    let player = new Player(playerInfo);
    this._players.push(player);

    socket.join('players');
    socket.emit('wait_game');

    this._io.to('game_master').emit('player_join', player.toJSON());

    socket.on('answer', (answerInfo) => {
      /* FIXME: Using `let`; is player defined here? */
    });
  }
}

export default Server;
