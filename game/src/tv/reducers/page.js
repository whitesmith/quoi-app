import { CHANGE_PAGE } from '../actions/Actions';

/*************************
 Initial state
 **************************/
const initialState = {
  name: 'HOME',
  data: {}
}

// pages:
// HOME
// CHALLENGE
// RESULTS

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        name: action.newPage,
        data: action.data
      });
    default:
      return state;
  }
};

export default reducer;
