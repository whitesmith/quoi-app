import { CHALLENGE_SHOW_OPTIONS } from '../actions/Actions';

/*************************
 Initial state
 **************************/
const initialState = {
  showOptions: false
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
    default:
      return state;
  }
};

export default reducerForChallenge;
