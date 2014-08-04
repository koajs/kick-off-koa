
var exercise = require('../../exercise');

module.exports = exercise
.push('/', function (data, res, stream) {
  stream.write('responds ' + data.toString() + ' when request /\n');
  stream.write('response status is ' + res.statusCode + ' when request /\n');
})
.push('/error', function (data, res, stream) {
  stream.write('responds ' + data.toString() + ' when request /error\n');
  stream.write('response status is ' + res.statusCode + ' when request /error\n');
})
.generate();
