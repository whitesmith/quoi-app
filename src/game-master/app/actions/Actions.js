export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_GAME = 'CHANGE_GAME';

export const changePage = (newPage) => {
  return {
    type: CHANGE_PAGE,
    newPage: newPage
  }
};

export const changeGame = (newGame) => {
  return {
    type: CHANGE_GAME,
    newGame: newGame
  }
};
