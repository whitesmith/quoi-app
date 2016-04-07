import { INCREMENT_TIMER, RESTART_TIMER } from '../actions/Actions';

const initialState = 10;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_TIMER:
      return state - 1;
    case RESTART_TIMER:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
