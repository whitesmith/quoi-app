/*************************
Actions
**************************/
export const NEW_MESSAGE = 'NEW_MESSAGE';

/*************************
Action Creators
**************************/
export const newMessage = (message) => {
  return {
    type: NEW_MESSAGE,
    message: message
  }
}
