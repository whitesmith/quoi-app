export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_GAME = 'CHANGE_GAME';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';
export const RESTART_TIMER = 'RESTART_TIMER';

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