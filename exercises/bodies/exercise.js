
var exercise = require('../../exercise');
var fmt = require('util').format;
var path = require('path');

module.exports = exercise
.argv(path.join(__dirname, 'input.txt'))
.push('/json', function (data, res, stream) {
  stream.write(fmt('`/json` respond body: %s\n', data.toString()));
  stream.write(fmt('`/json` respond content-type: %s\n', res.headers['content-type']));
})
.push('/stream', function (data, res, stream) {
  stream.write(fmt('`/stream` respond body: %s\n', data.toString()));
  stream.write(fmt('`/stream` respond content-type: %s\n', res.headers['content-type']));
  stream.write(fmt('`/stream` respond transfer-encoding: %s\n', res.headers['transfer-encoding']));
})
.generate();
