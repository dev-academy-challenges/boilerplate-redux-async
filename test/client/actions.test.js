import test from 'ava'
import nock from 'nock'

import * as actions from '../../client/actions'

test.cb('fetchPosts', t => {
  const scope = nock('http://localhost:80')
    .get('/api/reddit/subreddit/bananas')
    .reply(200, [{data: 'yay, bananas'}])

  actions.fetchPosts('bananas')((actual) => {
    scope.done()
    t.is(actual.type, 'RECEIVE_POSTS')
    t.is(actual.posts.length, 1)
    t.is(actual.posts[0], 'yay, bananas')
    t.end()
  })
})
