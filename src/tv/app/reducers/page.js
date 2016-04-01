import { CHANGE_PAGE } from '../actions/Actions';

/*************************
 Initial state
 **************************/
const initialState = 'HOME';

// pages:
// HOME
// CHALLENGE
// RESULTS

/*************************
 Reducer function:
 **************************/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.newPage;
    default:
      return state;
  }
};

export default reducer;
