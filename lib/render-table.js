module.exports = function (listItems) {
  var table = ''
  table += '<table><tr><th>Name</th><th>Age</th></tr>'
  listItems.forEach((item) => table = table + '<tr>' + '<td>' + item.name + '</td>' + '<td>' + item.age + '</td>' + '</tr>')
  table += '</table>'

  return table
}
