/*************************
Actions
**************************/
export const CHANGE_PAGE = 'CHANGE_PAGE';

/*************************
Action Creators
**************************/
export const changePage = () => {
  return {
    type: CHANGE_PAGE,
    state: 'CHALLENGE'
  }
};
