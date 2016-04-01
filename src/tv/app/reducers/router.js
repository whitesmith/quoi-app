/*************************
 Initial state
 **************************/
const initialState = {
    state: "HOME"
};

/*************************
 Reducer function:
 Calculates the new state of the application based on the previous state of the
 application and an action.
 **************************/
const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;
