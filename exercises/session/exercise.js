
var exercise = require('../../exercise');
var fmt = require('util').format;

var headers = {
  cookie: ''
};

module.exports = exercise
.push('/', { headers: headers }, function (data, res, stream) {
  this.strOut(stream, 'log.first_visit', data.toString());
  headers.cookie = res.headers['set-cookie'].join(';');
})
.push('/', { headers: headers }, function (data, res, stream) {
  this.strOut(stream, 'log.visit_again', data.toString());
})
.push('/', function (data, res, stream) {
  this.strOut(stream, 'log.new_user_visit', data.toString());
})
.generate();
