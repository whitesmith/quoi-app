import { CHANGE_PAGE } from '../actions/Actions';

/*************************
 Initial state
 **************************/
const initialState = 'HOME';

/*************************
 Reducer function:
 **************************/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return 'CHALLENGE';
    default:
      return state;
  }
};

export default reducer;
