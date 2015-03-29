var exercise = require('../../exercise');

module.exports = exercise.push('/', function(data, res, stream) {
  stream.write(data.toString().trim() + '\n');
}).generate();
