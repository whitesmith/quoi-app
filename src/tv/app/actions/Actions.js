/*************************
Actions
**************************/
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const CHALLENGE_NEW = 'CHALLENGE_NEW';
export const CHALLENGE_SHOW_OPTIONS = 'CHALLENGE_SHOW_OPTIONS';
export const CHALLENGE_SHOW_ANSWER = 'CHALLENGE_SHOW_ANSWER';

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
export const challengeNew = () => {
  return {
    type: CHALLENGE_NEW
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
