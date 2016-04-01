import { CHALLENGE_SHOW_OPTIONS } from '../actions/Actions';
import { CHALLENGE_SHOW_ANSWER } from '../actions/Actions';

/*************************
 Initial state
 **************************/
const initialState = {
  showOptions: false,
  showAnswer: false,
};

/*************************
 Reducer function:
 **************************/
const reducerForChallenge = (state = initialState, action) => {
  switch (action.type) {
    case CHALLENGE_SHOW_OPTIONS:
      return Object.assign({}, state, {
        showOptions: true
      });
    case CHALLENGE_SHOW_ANSWER:
      return Object.assign({}, state, {
        showAnswer: true
      });
    default:
      return state;
  }
};

export default reducerForChallenge;
