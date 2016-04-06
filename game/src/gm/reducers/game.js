import { CHANGE_GAME } from '../actions/Actions';

const initialState = 'LOGIN';

// game:
// LOGIN
// QUESTION
// ROUND
// RESPONDED
// READY
// READY_R

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GAME:
      return action.newGame;
    default:
      return state;
  }
};

export default reducer;
