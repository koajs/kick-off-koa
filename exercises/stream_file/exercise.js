
var exercise = require('../../exercise');

module.exports = exercise.push('/hello', function (data, res, stream) {
  stream.write(data.toString() + '\n');
}).generate();
