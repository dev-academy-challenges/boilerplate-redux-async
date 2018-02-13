import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

const LoadSubreddit = ({dispatch}) => (
  <button onClick={() => dispatch(fetchPosts('newzealand'))}>
    Fetch Posts
  </button>
)

export default connect()(LoadSubreddit)
