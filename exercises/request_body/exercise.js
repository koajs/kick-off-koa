
var exercise = require('../../exercise');

module.exports = exercise
.push('/', {
  method: 'POST',
  data: { name: 'hello' }
}, function (data, res, stream) {
  stream.write(this.__('log_conversion', 'hello', data.toString()));
})
.push('/', {
  method: 'POST',
  data: { name: 'koa' }
}, function (data, res, stream) {
  stream.write(this.__('log_conversion', 'koa', data.toString()));
})
.generate();
