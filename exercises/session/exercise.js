
var exercise = require('../../exercise');
var fmt = require('util').format;

var headers = {
  cookie: ''
};

module.exports = exercise
.push('/', { headers: headers }, function (data, res, stream) {
  stream.write(fmt('first visit: %s\n', data.toString()));
  headers.cookie = res.headers['set-cookie'].join(';');
})
.push('/', { headers: headers }, function (data, res, stream) {
  stream.write(fmt('visit again: %s\n', data.toString()));
})
.push('/', function (data, res, stream) {
  stream.write(fmt('new user visit page: %s\n', data.toString()));
})
.generate();
