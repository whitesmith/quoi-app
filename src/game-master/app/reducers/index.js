import { NEW_MESSAGE } from '../actions/Actions';

/*************************
Initial state
**************************/
const initialState = {
  message: "Hello"
};

/*************************
Reducer function:
Calculates the new state of the application based on the previous state of the
application and an action.
**************************/
const reducer = (state = initialState, action) => {

  switch (action.type) {

    case NEW_MESSAGE:
      return Object.assign({}, state, {
        message: action.message
      });

    default:
      return state;
  }
}

export default reducer;
