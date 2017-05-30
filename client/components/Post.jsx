import React from 'react'
import PropTypes from 'prop-types'

const Post = ({title}) => (
  <div>{title}</div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
