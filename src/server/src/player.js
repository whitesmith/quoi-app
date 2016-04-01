class Player {
  constructor ({name = '', pic = ''}) {
    this._name = name;
    this._pic = pic;
  }

  get name() {
    return this._name;
  }

  get pic() {
    return this._pic;
  }

  toJSON() {
    return {
      name: this._name,
      pic: this._pic
    }
  }
}

export default Player;
