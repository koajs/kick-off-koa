
var exercise = require('../../exercise');

module.exports = exercise
.push('/', {
  method: 'POST',
  data: { foo: 'bar' },
  headers: { 'content-type': 'application/json; charset=utf-8' }
}, function (data, res, stream) {
  stream.write(data.toString() + '\n');
})
.push('/', function (data, res, stream) {
  stream.write(data.toString() + '\n');
})
.generate();
