import { combineReducers } from 'redux'
import page from './page'
import timer from './timer'
import game from './game'

const gmReducers = combineReducers({
  page,
  timer,
  game
});

export default gmReducers
