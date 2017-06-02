import {REQUEST_POSTS, RECEIVE_POSTS} from '../actions'

function subreddits (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts

    case REQUEST_POSTS:
      return state

    default:
      return state
  }
}

export default subreddits
