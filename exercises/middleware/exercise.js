
var exercise = require('../../exercise');

module.exports = exercise
.push('/', function (data, res, stream) {
  this.strOut(stream, 'log_uppercase', data.toString());
  if (res.headers['x-response-time']) {
    this.strOut(stream, 'log_response_time');
  }
})
.generate();
