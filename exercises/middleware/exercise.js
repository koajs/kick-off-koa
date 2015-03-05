
var exercise = require('../../exercise');

module.exports = exercise
.push('/', function (data, res, stream) {
  stream.write(this.__('log_uppercase', data.toString()));
  if (res.headers['x-response-time']) {
    stream.write(this.__('log_response_time'));
  }
})
.generate();
