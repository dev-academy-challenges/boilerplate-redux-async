/* global test expect */
import request from 'supertest'
import nock from 'nock'

import server from '../../server/server'

test('GET /api/reddit/subreddit', () => {
  const scope = nock('http://www.reddit.com')
    .get('/r/bananas.json')
    .reply(200, {data: {children: {msg: 'yay, bananas'}}})

  request(server)
    .get('/api/reddit/subreddit/bananas')
    .expect(200)
    .end((err, res) => {
      scope.done()
      expect(err).toBeFalsy()
      expect(res.body.msg).toBe('yay, bananas')
    })
})
