import {connect} from 'react-redux'

import Subreddit from '../components/Subreddit'

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
