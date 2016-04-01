/*************************
Actions
**************************/
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHALLENGE_SHOW_OPTIONS = 'CHALLENGE_SHOW_OPTIONS';
export const CHALLENGE_SHOW_ANSWER = 'CHALLENGE_SHOW_ANSWER';

/*************************
Action Creators
**************************/
export const changePage = (newPage) => {
  return {
    type: CHANGE_PAGE,
    newPage: newPage
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
