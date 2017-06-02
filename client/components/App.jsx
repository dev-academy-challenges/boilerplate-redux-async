import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit />
    <SubredditList />
  </div>
)

export default App
