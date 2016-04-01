import { CHANGE_PAGE } from '../actions/Actions';

const initialState = 'HOME';

// pages:
// HOME
// CHALLENGE
// RESULTS

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.newPage;
    default:
      return state;
  }
};

export default reducer;
