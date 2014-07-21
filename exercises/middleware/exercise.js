
var exercise = require('../../exercise');

module.exports = exercise
.push('/', function (data, res, stream) {
  stream.write('`upperCase` middleware convert response body to `' + data.toString() + '`\n');
  if (res.headers['x-response-time']) {
    stream.write('`responseTime` middleware set `X-Response-Time` header\n');
  }
})
.generate();
