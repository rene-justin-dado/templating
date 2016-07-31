module.exports = function (items) {
var list = ''
  list += '<ul>'
  items.forEach((item) => list += '<li>' + item.name + ', ' + item.age + '</li>')
  list += '</ul>'

  return list
}
