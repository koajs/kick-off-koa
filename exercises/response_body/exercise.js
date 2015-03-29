
var exercise = require('../../exercise');
var fmt = require('util').format;
var path = require('path');

module.exports = exercise
.argv(path.join(__dirname, 'input.txt'))
.push('/json', function (data, res, stream) {
  this.strOut(stream, 'log_body', '/json', data.toString());
  this.strOut(stream, 'log_ctype', '/json', res.headers['content-type']);
})
.push('/stream', function (data, res, stream) {
  this.strOut(stream, 'log_body', '/stream', data.toString());
  this.strOut(stream, 'log_ctype', '/stream', res.headers['content-type']);
  this.strOut(stream, 'log_encoding', '/stream', res.headers['transfer-encoding']);
})
.generate();
