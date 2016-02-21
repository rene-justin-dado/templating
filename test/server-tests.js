var test = require('tape')
var request = require('supertest')
var cheerio = require('cheerio')
var w3c = require('w3c-validate').createValidator()

var server = require('../server/server')

test('GET /people?view=table returns an html string with a <table>', function (t) {
  request(server)
    .get('/people')
    .query('view', 'table') // /people?view=table 
    .expect(200)
    .end(function (err, res) {
      if (err) { return err }
      t.ok(res.text)

      var $ = cheerio.load(res.text)
      // write a test for checking if the response text has the correct amount of table rows and the correct content
      w3c.validate(res.text, function (err) {
        t.ok(!err)
        t.end()
      })


    })


})
