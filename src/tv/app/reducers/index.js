import { combineReducers } from 'redux'
import page from './page'
import challenge from './challenge'

const tvApp = combineReducers({
  page,
  challenge
});

export default tvApp
