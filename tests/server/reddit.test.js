import nock from 'nock'
import request from 'supertest'

import server from '../../server/server'

test('GET /api/v1/reddit/subreddit', () => {
  const scope = nock('http://www.reddit.com')
    .get('/r/bananas.json')
    .reply(200, {data: {children: {msg: 'yay, bananas'}}})

  return request(server)
    .get('/api/v1/reddit/subreddit/bananas')
    .expect(200)
    .then(res => {
      scope.done()
      expect(res.body.msg).toBe('yay, bananas')
    })
})
