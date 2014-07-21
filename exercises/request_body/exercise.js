
var exercise = require('../../exercise');

module.exports = exercise.push('/', {
  method: 'POST',
  data: {
    name: 'hello koa'
  }
}, function (data, res, stream) {
  stream.write(data.toString() + '\n');
}).generate();
