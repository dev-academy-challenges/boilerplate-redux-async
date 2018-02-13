import nock from 'nock'

import * as actions from '../../client/actions'

test('fetchPosts', () => {
  const scope = nock('http://localhost')
    .get('/api/v1/reddit/subreddit/bananas')
    .reply(200, [{data: 'yay, bananas'}])

  const dispatch = jest.fn()

  return actions.fetchPosts('bananas')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0][0].type).toBe('REQUEST_POSTS')
      expect(dispatch.mock.calls[1][0].type).toBe('RECEIVE_POSTS')
      scope.done()
    })
})
