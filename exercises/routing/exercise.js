
var exercise = require('../../exercise');
var fmt = require('util').format;

module.exports = exercise
.push('/', function (data, res, stream) {
  stream.write(fmt('`/` respond body: %s\n', data.toString()));
})
.push('/404', function (data, res, stream) {
  stream.write(fmt('`/404` respond body: %s\n', data.toString()));
})
.push('/500', function (data, res, stream) {
  stream.write(fmt('`/500` respond body: %s\n', data.toString()));
})
.generate();
