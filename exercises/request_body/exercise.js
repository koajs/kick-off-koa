
var exercise = require('../../exercise');

module.exports = exercise
.push('/', {
  method: 'POST',
  data: { name: 'hello' }
}, function (data, res, stream) {
  stream.write('convert `hello` to `' + data.toString() + '`\n');
})
.push('/', {
  method: 'POST',
  data: { name: 'koa' }
}, function (data, res, stream) {
  stream.write('convert `koa` to `' + data.toString() + '`\n');
})
.generate();
