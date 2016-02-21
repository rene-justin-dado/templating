var test = require('tape')
var renderTable = require('../lib/render-table')
var fs = require('fs')

// renderTable test
//arrange
var fakeData = [
  { name: 'Alice', age: 60 },
  { name: 'Bob', age: 21 },
  { name: 'Charles', age: 36 }
]
var expectedHTMLString = '<table><tr><th>Name</th><th>Age</th></tr><tr><td>Alice</td><td>60</td></tr><tr><td>Bob</td><td>21</td></tr><tr><td>Charles</td><td>36</td></tr></table>'

//setup tape
test('it renders a table of items', function (t) {
  //action
  var actualHTMLSTRING = renderTable(fakeData)

  //assert
  t.equal(actualHTMLSTRING, expectedHTMLString, 'it produces the expected string')
  t.end()
})


//renderList test
// arrange


// setup tape


  // action


  //assert
