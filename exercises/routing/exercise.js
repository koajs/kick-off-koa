
var exercise = require('../../exercise');
var fmt = require('util').format;

module.exports = exercise
.push('/', function (data, res, stream) {
  this.strOut(stream, 'log_format', '/', data.toString())
})
.push('/404', function (data, res, stream) {
  this.strOut(stream, 'log_format', '/404', data.toString())
})
.push('/500', function (data, res, stream) {
  this.strOut(stream, 'log_format', '/500', data.toString())
})
.generate();
