import { combineReducers } from 'redux'
import page from './page'
import timer from './timer'
import challenge from './challenge'

const tvReducers = combineReducers({
  page,
  timer,
  challenge
});

export default tvReducers
