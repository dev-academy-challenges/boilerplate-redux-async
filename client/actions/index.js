import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receivePosts(res.body))
      })
  }
}
