
var exercise = require('../../exercise');

module.exports = exercise
.push('/', {
  method: 'POST',
  data: { name: 'hello' }
}, function (data, res, stream) {
  this.strOut(stream, 'log_conversion', 'hello', data.toString());
})
.push('/', {
  method: 'POST',
  data: { name: 'koa' }
}, function (data, res, stream) {
  this.strOut(stream, 'log_conversion', 'koa', data.toString());
})
.generate();
