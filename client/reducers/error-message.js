import {SHOW_ERROR} from '../actions'

function errorMessage (state = '', action) {
  switch (action.type) {
    case SHOW_ERROR:
      return action.errorMessage

    default:
      return state
  }
}

export default errorMessage
