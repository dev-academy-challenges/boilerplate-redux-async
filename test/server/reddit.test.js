const test = require('ava')
const request = require('supertest')
const nock = require('nock')

const server = require('../../server/server')

test.cb('GET /api/reddit/subreddit', t => {
  nock('http://www.reddit.com')
    .get('/r/bananas.json')
    .reply(200, {data: {children: {msg: 'yay, bananas'}}})

  request(server)
    .get('/api/reddit/subreddit/bananas')
    .expect(200)
    .end((err, res) => {
      t.is(res.body.msg, 'yay, bananas')
      t.end()
    })
})
