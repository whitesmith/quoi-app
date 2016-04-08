import Enum from 'es6-enum';
import ExtendableError from 'es6-error';

const QUESTION_TYPE = Enum("SINGLE", "MULTIPLE", "ORDER");
const DEFAULT_POINTS = 100;
const DEFAULT_TIME_MILLIS = 10000;

/* TODO: If we're actually converting it everytime we use it,
 * is it really worth it?... */
function questionTypeToString(type) {
  switch(type) {
    case QUESTION_TYPE.SINGLE:
      return 'single';
    case QUESTION_TYPE.MULTIPLE:
      return 'multiple';
    case QUESTION_TYPE.ORDER:
      return 'order';
  }

  return 'single';
}

function questionTypeStringtoSymbol(typeString) {
  switch(typeString) {
    case 'single':
      return QUESTION_TYPE.SINGLE;
    case 'multiple':
      return QUESTION_TYPE.MULTIPLE;
    case 'order':
      return QUESTION_TYPE.ORDER;
  }

  return QUESTION_TYPE.SINGLE;
}

class InvalidQuestionError extends ExtendableError {
  constructor(message = '') {
    super(message);
  }
}

class Question {
  constructor({id = -1, question = '', media = null, options = [], type = QUESTION_TYPE.SINGLE, answer = [], points = DEFAULT_POINTS, time = DEFAULT_TIME_MILLIS}) {
    this._id = id;
    this._question = question;
    this._media = media;
    this._options = options;
    this._type = type;

    if (typeof this._type === 'string') {
      this._type = questionTypeStringtoSymbol(this._type);
    }

    this._answer = answer;

    if (this._answer.length === 1 && this._type !== QUESTION_TYPE.SINGLE) {
      throw new InvalidQuestionError('a single answer was provided for a ' +
        'multiple-answer question type. Either provide additional answers or' +
        'change it to a "single" answer question type.');
    }

    if (this._answer.length > 1 && this._type === QUESTION_TYPE.SINGLE) {
      throw new InvalidQuestionError('multiple answers were provided to a ' +
        'single-answer question type. Please choose between a "multiple" or ' +
        '"order" type of question.');
    }

    /* Sort the multiple answer array, in case the user forgot it.
     * Avoids sorting it on every check. */
    if (this._type === QUESTION_TYPE.MULTIPLE) {
      this._answer.sort();
    }

    this._points = points;
    this._time = time;

    this._playersAnswers = {};
  }

  _acceptsAnswer(answer) {
    if (answer.length !== answer.length) {
      return false;
    }

    switch (this._type) {
      case QUESTION_TYPE.SINGLE:
        return this._answer[0] === answer[0];
      break;

      case QUESTION_TYPE.MULTIPLE:
        var sortedAnswer = Array.from(answer).sort();
        return sortedAnswer.every((el, i) => { return el === this._answer[i] });

      case QUESTION_TYPE.ORDER:
        return answer.every((el, i) => { return el === this._answer[i] });
      break;
    }

    return false;
  }

  addAnswer(player, {id, answer, time}) {
    if (this._playersAnswers[player.name]) {
      console.log('[!] Rejecting multiple answers for the same player.');
      return;
    }

    let noAnswer = answer.length === 0;
    let correctAnswer = noAnswer ? false : this._acceptsAnswer(answer);

    /* Basic point formula: points are assigned according to:
     *   no answer: 0
     *   right answer: 0 to max_points
     *   wrong answer: -max_points to 0
     */
    let pointsSignal = noAnswer ? 0 : (correctAnswer ? 1 : -1);
    /* FIXME: remove these hardcoded values and check why the score is
     * not being calculated properly. */

    let answerPoints = Math.round(((this._time - time) / this._time) * pointsSignal * this._points);

    this._playersAnswers[player.name] = answerPoints;
  }

  getAnswerPointsByPlayer(playerName) {
    let points = this._playersAnswers[playerName];
    if (points) {
      return points;
    }

    /* FIXME: configure the "no-answer" points. May be negative (i.e. the user
     * is penalized for not answering (in the future). */
    return 0;
  }

  toTvJSON() {
    return {
      id: this._id,
      question: this._question,
      media: this._media,
      options: this._options,
      type: questionTypeToString(this._type),
      answer: this._answer
    }
  }

  toPlayerJSON() {
    return {
      id: this._id,
      type: this._type
    }
  }

  get id() {
    return this._id;
  }

  get points() {
    return this._points;
  }
}

export default Question;
export { QUESTION_TYPE, InvalidQuestionError };
