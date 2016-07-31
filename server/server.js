var express = require('express')
var path = require('path')
var server = express()
var bodyParser = require('body-parser')
var fs = require('fs')

var renderList = require('../lib/render-list.js')

// GET /people?view=table
// req.params
// takes the index.html
// adds the table of people to the index.html
function readAsync () {
  var data = path.join(__dirname, '../datastore/db.json')
  fs.readFile(data, showContents)
}

function showContents (err, buffer) {
  if (err) {
    return console.log(err.message)
  }
  var data = buffer.toString()
}

// routes
server.get('/', function (req, res) {
  req.body(JSON.parse(data))
})

module.exports = server
