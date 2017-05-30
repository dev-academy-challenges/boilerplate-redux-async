import test from 'ava'
import request from 'supertest'
import nock from 'nock'

import server from '../../server/server'

test.cb('GET /api/reddit/subreddit', t => {
  const scope = nock('http://www.reddit.com')
    .get('/r/bananas.json')
    .reply(200, {data: {children: {msg: 'yay, bananas'}}})

  request(server)
    .get('/api/reddit/subreddit/bananas')
    .expect(200)
    .end((err, res) => {
      scope.done()
      t.is(err, null)
      t.is(res.body.msg, 'yay, bananas')
      t.end()
    })
})
