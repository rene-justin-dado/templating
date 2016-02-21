var express = require('express')
var cheerio = require('cheerio')
var fs = require('fs')
var path = require('path')
var server = express()

  
// GET /people?view=table
// req.params
// takes the index.html
// adds the table of people to the index.html

// routes
server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'))
})

module.exports = server
