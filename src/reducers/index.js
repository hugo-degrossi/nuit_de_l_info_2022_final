import {combineReducers} from 'redux'

import game from './game'
import bird from './sperm'
import pipe from './pipe'
import score from './score'

export default combineReducers({
  game,
  bird,
  pipe,
  score
})
