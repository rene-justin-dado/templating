var test = require('tape')
var request = require('supertest')
var cheerio = require('cheerio')

var server = require('../server/server')

test('GET /people?view=table returns an html string with a <table>', function (t) {
  request(server)
    .get('/people')
    .query({view: 'table'}) // /people?view=table
    .expect(200)
    .end(function (err, res) {
      if (err) { return err }

      t.ok(res.text)

      var $ = cheerio.load(res.text)
      // add an assertion to ensure the response has the correct content (e.g. number of rows)

      t.equal()
      t.end()
    })
})
