/*************************
Actions
**************************/
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHALLENGE_SHOW_OPTIONS = 'CHALLENGE_SHOW_OPTIONS';

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
