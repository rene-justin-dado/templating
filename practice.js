var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')
var data = require('./data')

var app = express()

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'))

app.get('/', function (req, res) {
  res.render('index', data.data)
})

app.get('/blog', function (req, res) {
  res.render('blog', data.data)
})

app.listen(3002, function () {
  console.log('Listening on port 3002')
})
