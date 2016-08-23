import React, {PropTypes} from 'react'

const Post = ({title}) => (
  <div>{title}</div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
