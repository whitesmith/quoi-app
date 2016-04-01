import { combineReducers } from 'redux'
import page from './page'
import game from './game'

const tvApp = combineReducers({
  page,
  game
});

export default tvApp