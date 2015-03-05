
var exercise = require('../../exercise');

module.exports = exercise
.push('/', function (data, res, stream) {
  this.strOut(stream, 'log_body', data.toString(), '/');
  this.strOut(stream, 'log_status', res.statusCode, '/');
})
.push('/error', function (data, res, stream) {
  this.strOut(stream, 'log_body', data.toString(), '/error');
  this.strOut(stream, 'log_status', res.statusCode, '/error');
})
.generate();
