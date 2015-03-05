
var exercise = require('../../exercise');
var fmt = require('util').format;

module.exports = exercise
.push('/', function (data, res, stream) {
  var logFormat = this.__('log_format');
  stream.write(fmt(logFormat, '/', data.toString()));
})
.push('/404', function (data, res, stream) {
  var logFormat = this.__('log_format');
  stream.write(fmt(logFormat, '/404', data.toString()));
})
.push('/500', function (data, res, stream) {
  var logFormat = this.__('log_format');
  stream.write(fmt(logFormat, '/500', data.toString()));
})
.generate();
