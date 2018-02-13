/* global test expect */
import nock from 'nock'

import * as actions from '../../client/actions'

test('fetchPosts', () => {
  const scope = nock('http://localhost:80')
    .get('/api/v1/reddit/subreddit/bananas')
    .reply(200, [{data: 'yay, bananas'}])

  actions.fetchPosts('bananas')((actual) => {
    scope.done()
    expect(actual.type).toBe('RECEIVE_POSTS')
    expect(actual.posts.length).toBe(1)
    expect(actual.posts[0]).toBe('yay, bananas')
  })
})
