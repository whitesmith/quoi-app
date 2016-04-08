import SocketIo from "socket.io";

import Question from "./lib/question";
import Player from "./lib/player";

class Server {
  constructor({ socketio: socketioConfig }, questions = []) {
    this._io = SocketIo(socketioConfig.PORT);

    /* Initial setup; usually set afterwards */
    this.setQuestions(questions);

    this._players = new Map();

    this._io.on('connect', (...args) => {
      this.onConnect(...args);
    });
  }

  setQuestions(questions = []) {
    if (questions.length > 0 && !(questions[0] instanceof Question)) {
      questions = questions.map(question => new Question(question));
    }

    this._questions = questions;
    this._currentQuestionNo = -1;
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

    let existingPlayer = this._players.get(player.name);
    let newPlayer = !existingPlayer;
    if (existingPlayer && !existingPlayer.checkToken(player.token)) {
      /* The player exists but the token does not match: this is not a
       * reconnection attempt; this is another player trying to obtain the
       * same name. */

      /* TODO: Alert the user that a player with that name already
       * exists. */
      cb('player_same_name');

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
    this._players.set(player.name, player);

    player.socket.join('players');

    /* Tell the player what token should be communicated in the case of a
     * reconnect. */
    cb(null, { token: player.token });

    /* TODO: Since this may be a reconnect, the event that should be emitted is
     * the CURRENT one, which is not necessarily the `game_wait_start`. */
    player.socket.emit('game_wait_start');

    this._io.to('game_master').emit('gm_player_join', player.toJSON());

    this.bindPlayerEvents(player);
  }

  bindGameMasterEvents(socket) {
    socket.on('gm_questions_set', (questions) => {
      console.log('[gm_questions_set] The Game Master sent the questions.');
      this.setQuestions(questions.data);
    });

    socket.on('gm_question_ready', () => {
      console.log('[gm_question_ready] Show next question; triggered by GM.');

      /* Next question */
      this._currentQuestionNo++;
      if (!this.currentQuestion) {
        let ranking = this.getRanking();

        this._io.to('tvs').emit('tv_game_end', {
          data: ranking
        });

        for (let i = 0; i < ranking.length; i++) {
          let playerRanking = ranking[i];
          this._players.get(playerRanking.name).socket.emit('game_end', { ranking: i + 1 });
        }

        return;
      }

      this._io.to('players').emit('question_ready', this.currentQuestion.toPlayerJSON());
      this._io.to('tvs').emit('tv_question_ready', this.currentQuestion.toTvJSON());
    });

    socket.on('gm_question_go', () => {
      console.log('[gm_question_go] Show answers and start the clock; triggered by GM.');

      this._io.to('players').emit('question_go', {
        id: this.currentQuestion.id
      });

      this._io.to('tvs').emit('tv_question_go', {
        id: this.currentQuestion.id
      });
    });

    socket.on('gm_question_correction', () => {
      console.log('[gm_question_correction] Show correct answer; triggered by GM.');

      this._players.forEach((player) => {
        console.log(this.currentQuestion.id);
        console.log(player.name);
        console.log(this.currentQuestion.getAnswerPointsByPlayer(player.name))
        player.socket.emit('question_correction', {
          id: this.currentQuestion.id,
          correct: this.currentQuestion.getAnswerPointsByPlayer(player.name) > 0
        });
      });

      this._io.to('tvs').emit('tv_question_correction', {
        id: this.currentQuestion.id
      });
    });

    socket.on('gm_ranking_show', () => {
      console.log('[gm_ranking_show] Show ranking.');

      let ranking = this.getRanking();

      this._io.to('tvs').emit('tv_ranking_show', {
        data: ranking
      });

      for (let i = 0; i < ranking.length; i++) {
        let playerRanking = ranking[i];
        this._players.get(playerRanking.name).socket.emit('ranking_show', { ranking: i + 1 });
      }
    });
  }

  bindTvEvents(socket) {
  }

  bindPlayerEvents(player) {
    player.socket.on('question_answer', (answerInfo) => {
      /* TODO: handle answer event. */
      this.currentQuestion.addAnswer(player, answerInfo);
    });
  }

  get currentQuestion() {
    if (this._currentQuestionNo >= this._questions.length) {
      return false;
    }

    return this._questions[this._currentQuestionNo];
  }

  getRanking() {
    let ranking = [];

    let nQuestions = Math.min(this._currentQuestionNo, this._questions.length - 1);

    this._players.forEach((player) => {
      let playerScore = 0;
      for (let i = 0; i <= nQuestions; i++) {
        playerScore += this._questions[i].getAnswerPointsByPlayer(player.name);

        /* No negative scores; turn the score into 0 _during_ the game
         * (instead of only doing this in the end). */
        if (playerScore < 0) {
          playerScore = 0;
        }
      }

      ranking.push({
        name: player.name,
        pic: player.pic,
        score: playerScore
      });
    });

    ranking.sort(function (a, b) { return b - a });

    return ranking;
  }
}

export default Server;
