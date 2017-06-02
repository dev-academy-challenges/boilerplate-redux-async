import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditContainer from '../containers/SubredditContainer'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit />
    <SubredditContainer />
  </div>
)

export default App
