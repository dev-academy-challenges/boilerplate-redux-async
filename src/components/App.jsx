import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import SubredditContainer from '../containers/SubredditContainer'

const App = () => (
  <div className='app-container'>
    <LoadSubreddit />
    <SubredditContainer />
  </div>
)

export default App
