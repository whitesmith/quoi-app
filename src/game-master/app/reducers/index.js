import { combineReducers } from 'redux'
import page from './page'
import game from './game'
import timer from './timer'

const tvApp = combineReducers({
  page,
  game,
  timer
});

export default tvApp