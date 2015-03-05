
var exercise = require('../../exercise');

module.exports = exercise
.push('/', function (data, res, stream) {
  stream.write(this.__('log_body', data.toString(), '/'));
  stream.write(this.__('log_status', res.statusCode, '/'));
})
.push('/error', function (data, res, stream) {
  stream.write(this.__('log_body', data.toString(), '/error'));
  stream.write(this.__('log_status', res.statusCode, '/error'));
})
.generate();
