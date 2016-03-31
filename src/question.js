import Enum from 'es6-enum';
import ExtendableError from 'es6-error';

const QUESTION_TYPE = Enum("SINGLE", "MULTIPLE", "ORDER");
const DEFAULT_POINTS = 100;

class InvalidQuestionError extends ExtendableError {
  constructor(message = '') {
    super(message);
  }
}

class Question {
  constructor({question = '', media = null, options = [], questionType = QUESTION_TYPE.SINGLE, answer = [], points = DEFAULT_POINTS}) {
    this._question = question;
    this._media = media;
    this._options = options;
    this._questionType = questionType;

    this._answer = answer;

    if (this._answer.length === 1 && this._questionType !== QUESTION_TYPE.SINGLE) {
      throw new InvalidQuestionError('a single answer was provided for a ' +
        'multiple-answer question type. Either provide additional answers or' +
        'change it to a "single" answer question type.');
    }

    if (this._answer.length > 1 && this._questionType === QUESTION_TYPE.SINGLE) {
      throw new InvalidQuestionError('multiple answers were provided to a ' +
        'single-answer question type. Please choose between a "multiple" or ' +
        '"order" type of question.');
    }

    /* Sort the multiple answer array, in case the user forgot it.
     * Avoids sorting it on every check. */
    if (this._questionType === QUESTION_TYPE.MULTIPLE) {
      this._answer.sort();
    }

    this._points = points;
  }

  acceptsAnswer(answer) {
    if (answer.length !== answer.length) {
      return false;
    }

    switch (this._questionType) {
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

  get points() {
    return this._points;
  }
}

export default Question;
export { QUESTION_TYPE, InvalidQuestionError };
