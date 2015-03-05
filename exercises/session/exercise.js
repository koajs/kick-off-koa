
var exercise = require('../../exercise');
var fmt = require('util').format;

var headers = {
  cookie: ''
};

module.exports = exercise
.push('/', { headers: headers }, function (data, res, stream) {
  stream.write(this.__('log.first_visit', data.toString()));
  headers.cookie = res.headers['set-cookie'].join(';');
})
.push('/', { headers: headers }, function (data, res, stream) {
  stream.write(this.__('log.visit_again', data.toString()));
})
.push('/', function (data, res, stream) {
  stream.write(this.__('log.new_user_visit', data.toString()));
})
.generate();
