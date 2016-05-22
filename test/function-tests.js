var test = require('tape')
var renderTable = require('../lib/render-table')

var fakeData = [
  {name: 'Alice', age: 60},
  {name: 'Bob', age: 21},
  {name: 'Charles', age: 36}
]

test('it renders a table of items', function (t) {
  var expectedHtmlString = '<table><tr><th>Name</th><th>Age</th></tr><tr><td>Alice</td><td>60</td></tr><tr><td>Bob</td><td>21</td></tr><tr><td>Charles</td><td>36</td></tr></table>'

  var actualHtmlString = renderTable(fakeData)

  t.equal(actualHtmlString, expectedHtmlString, 'it produces the expected string')
  t.end()
})

// renderList test
test('it renders a list of items', function (t) {
  // implement
})
