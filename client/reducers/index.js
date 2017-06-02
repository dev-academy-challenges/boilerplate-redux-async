import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'

export default combineReducers({
  errorMessage,
  subreddits
})

