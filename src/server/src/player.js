import Crypto from 'crypto';

const TOKEN_SIZE = 8;

class Player {
  constructor ({name = '', pic = '', token = false}, socket) {
    this._name = name;
    this._pic = pic;
    this._token = token;

    if (!this._token) {
      /* Doing this synchronously since this is a constructor; it will block
       * until there's enough entropy, but under normal circumstances that
       * shouldn't take more than a few millis.
       *
       * https://nodejs.org/dist/latest-v5.x/docs/api/crypto.html#crypto_crypto_randombytes_size_callback
       */
      this._token = Crypto.randomBytes(TOKEN_SIZE).toString('hex');
    }

    this._socket = socket;
  }

  checkToken(challengingToken) {
    return this._token === challengingToken;
  }

  get name() {
    return this._name;
  }

  get pic() {
    return this._pic;
  }

  get socket() {
    return this._socket;
  }

  get token() {
    return this._token;
  }

  set socket(socket) {
    this._socket = socket;
  }

  toJSON() {
    return {
      name: this._name,
      pic: this._pic
    }
  }
}

export default Player;
