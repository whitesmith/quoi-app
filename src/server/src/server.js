import Player from "./player";

class Server {
  constructor(io, questions = []) {
    this._io = io;

    this._questions = questions;
    this._currentQuestionNo = -1;

    this._players = {};

    this._io.on('connect', (...args) => {
      this.onConnect(...args);
    });
  }

  onConnect(socket) {
    /* TODO: for now admin logins won't be authenticated.
     * Some kind of authentication should be performed between the two apps and
     * the server. */
    socket.on('gm_login', (...args) => { this.onGameMasterLogin(socket, ...args) });

    socket.on('tv_login', (...args) => { this.onTvLogin(socket, ...args) });

    socket.on('login', (...args) => { this.onPlayerLogin(socket, ...args) });
  }

  onGameMasterLogin(socket, tvInfo, cb = () => {}) {
    console.log('[gm_login] The Game Master just logged in.');

    socket.join('game_master');

    /* FIXME: Currently this accepts everyone. */
    cb(null);

    /* FIXME: this is for Pedro Costa's testing purposes, delete. */
    socket.emit('game_wait_start');

    this.bindGameMasterEvents(socket);
  }

  onTvLogin(socket) {
    console.log('[tv_login] A TV just connected.');

    socket.join('tvs');

    /* FIXME: this is for Pedro Costa's testing purposes, delete. */
    socket.emit('game_wait_start');

    this.bindTvEvents(socket);
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
    socket.on('gm_question_ready', () => {
      console.log('[gm_question_ready] Show next question; triggered by GM.');

      /* Next question */
      this._currentQuestionNo++;
      if (!this.currentQuestion) {
        /* FIXME: GAME OVER. What to do? Emit events to every device? */
        this._io.to('players').emit('game_end');
        return;
      }

      this._io.to('players').emit('question_ready', this.currentQuestion.toPlayerJSON());
      this._io.to('tvs').emit('tv_question_ready', this.currentQuestion.toTvJSON());
    });

    socket.on('gm_question_go', () => {
      console.log('[gm_question_go] Show answers and start the clock; triggered by GM.');
      /* FIXME: hardcoded for testing purposes. */

      this._io.to('players').emit('question_go', {
        id: 1
      });

      this._io.to('tvs').emit('tv_question_go', {
        id: 1
      });
    });

    socket.on('gm_question_correction', () => {
      console.log('[gm_question_correction] Show correct answer; triggered by GM.');
      /* FIXME: hardcoded for testing purposes. */

      /* FIXME: this is not a broadcast; this is a per-user event. */
      this._io.to('players').emit('question_correction', {
        id: 1,
        correct: !!Math.round(Math.random())
      });

      this._io.to('tvs').emit('tv_question_correction', {
        id: 1
      });
    });

    socket.on('gm_ranking_show', () => {
      console.log('[gm_ranking_show] Show ranking.');

      /* FIXME: this is not a broadcast; this is a per-user event. */
      this._io.to('players').emit('ranking_show');

      this._io.to('tvs').emit('tv_ranking_show', {
        data: [
          {
            name: 'Diogo Lucas',
            pic: 'http://www.whitesmith.co/assets/images/team/dpflucas/profile.jpg',
            score: 700
          },
          {
            name: 'Pedro Costa',
            pic: 'http://www.whitesmith.co/assets/images/team/pmdcosta/profile.jpg',
            score: 600
          },
          {
            name: 'Nuno Silva',
            pic: 'http://www.whitesmith.co/assets/images/team/profile.png',
            score: 500
          },
          {
            name: 'José Ribeiro',
            pic: 'http://www.whitesmith.co/assets/images/team/jlbribeiro/profile.jpg',
            score: 400
          }
        ]
      });
    });
  }

  bindTvEvents(socket) {
  }

  bindPlayerEvents(player) {
    player.socket.on('answer', (answerInfo) => {
      /* TODO: handle answer event. */
    });
  }

  get currentQuestion() {
    if (this._currentQuestionNo >= this._questions.length) {
      return false;
    }

    return this._questions[this._currentQuestionNo];
  }
}

export default Server;
