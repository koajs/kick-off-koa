
var exercise = require('../../exercise');
var fmt = require('util').format;

var headers = {
  cookie: ''
};

module.exports = exercise
.push('/', { headers: headers }, function (data, res, stream) {
  this.strOut(stream, 'log.first_visit', data.toString());

  var setCookies = res.headers['set-cookie'].join(';');
  if (!~setCookies.indexOf('view=')) {
    this.emit('fail', this.__('fail.unset_cookie'));
    process.exit(1);
  }
  if (!~setCookies.indexOf('view.sig=')) {
    this.emit('fail', this.__('fail.set_unsigned'));
    process.exit(1);
  }
  headers.cookie = setCookies;
})
.push('/', { headers: headers }, function (data, res, stream) {
  this.strOut(stream, 'log.visit_again', data.toString());
})
.push('/', { headers: { cookie: 'view=100;' } }, function (data, res, stream) {
  if (data.toString() !== this.__('output.one_view')) {
    this.emit('fail', this.__('fail.get_unsigned'));
    process.exit(1);
  }
  this.strOut(stream, 'log.signed');
})
.generate();
