/*************************
Actions
**************************/
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const CHALLENGE_NEW = 'CHALLENGE_NEW';
export const CHALLENGE_SHOW_OPTIONS = 'CHALLENGE_SHOW_OPTIONS';
export const CHALLENGE_SHOW_ANSWER = 'CHALLENGE_SHOW_ANSWER';

export const INCREMENT_TIMER = 'INCREMENT_TIMER';
export const RESTART_TIMER = 'RESTART_TIMER';

/*************************
Action Creators
**************************/
export const changePage = (newPage, data) => {
  return {
    type: CHANGE_PAGE,
    newPage: newPage,
    data: data
  }
};
export const challengeShowOptions = () => {
  return {
    type: CHALLENGE_SHOW_OPTIONS
  }
};
export const challengeShowAnswer = () => {
  return {
    type: CHALLENGE_SHOW_ANSWER
  }
};
export const incrementTimer = () => {
  return {
    type: INCREMENT_TIMER
  }
};
export const restartTimer = () => {
  return {
    type: RESTART_TIMER
  }
};
