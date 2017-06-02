import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit />
    <WaitIndicator />
    <SubredditList />
  </div>
)

export default App
