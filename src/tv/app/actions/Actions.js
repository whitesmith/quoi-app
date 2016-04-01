/*************************
Actions
**************************/
export const CHANGE_PAGE = 'CHANGE_PAGE';

/*************************
Action Creators
**************************/
export const changePage = (newPage) => {
  return {
    type: CHANGE_PAGE,
    newPage: newPage
  }
};
