import { combineReducers } from 'redux'
import page from './page'
import challenge from './challenge'
import timer from './timer'


const tvApp = combineReducers({
  page,
  challenge,
  timer
});

export default tvApp
