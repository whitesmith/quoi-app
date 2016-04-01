import Player from "./player";
import Question, { QUESTION_TYPE } from "./question";

class Server {
  constructor(io, questions = []) {
    this._io = io;

    this._questions = questions;
    this._questionNo = -1;
    this._players = {};

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

    this.bindGameMasterEvents(socket);
  }

  onPlayerLogin(socket, playerInfo, cb = () => {}) {
    console.log(`[login] Event received (socket ${socket.id}).`);

    let player = new Player(playerInfo, socket);

    let existingPlayer = this._players[player.name];
    let newPlayer = !existingPlayer;
    if (existingPlayer && !existingPlayer.checkToken(player.token)) {
      /* The player exists but the token does not match: this is not a
       * reconnection attempt; this is another player trying to obtain the
       * same name. */

      /* TODO: Alert the user that a player with that name already
       * exists. */
      cb('player_same_name');

      /* TODO: Remove this event as soon as the apps are changed to use the
       * callback value. */
      socket.emit('player_same_name');

      console.log(`[login] Terminating connection with ${player.socket.id} ` +
        `since the player name is taken ("${player.name}").`);
      return;
    }

    if (newPlayer) {
      console.log(`[login] A new player named "${player.name}" (socket ` +
        `${player.socket.id}) just connected to the server.`);
    } else {
      console.log(`[login] Player "${player.name}" (socket ` +
        `${player.socket.id}) just reconnected.`);
    }

    /* Store the player. If it already exists, overwrite it because there was a reconnection. */
    this._players[player.name] = player;

    player.socket.join('players');

    /* Tell the player what token should be communicated in the case of a
     * reconnect. */
    cb(null, { token: player.token });

    /* TODO: Since this may be a reconnect, the event that should be emitted is
     * the CURRENT one, which is not necessarily the `game_wait_start`. */
    player.socket.emit('game_wait_start');

    this._io.to('game_master').emit('player_join', player.toJSON());

    this.bindPlayerEvents(player);
  }

  bindGameMasterEvents(socket) {
  }

  bindPlayerEvents(player) {
    console.log(`[${player.socket.id}] ${player.name} connected`);

    player.socket.on('answer', (answerInfo) => {
      /* TODO: handle answer event. */
    });
  }
}

export default Server;
