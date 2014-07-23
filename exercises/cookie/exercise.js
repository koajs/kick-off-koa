
var exercise = require('../../exercise');
var fmt = require('util').format;

var headers = {
  cookie: ''
};

module.exports = exercise
.push('/', { headers: headers }, function (data, res, stream) {
  stream.write(fmt('first visit: %s\n', data.toString()));

  var setCookies = res.headers['set-cookie'].join(';');
  if (!~setCookies.indexOf('view=')) {
    this.emit('fail', 'cookie.view not set');
    process.exit(1);
  }
  if (!~setCookies.indexOf('view.sig=')) {
    this.emit('fail', 'ctx.cookies.set should set options.signed = true');
    process.exit(1);
  }
  headers.cookie = setCookies;
})
.push('/', { headers: headers }, function (data, res, stream) {
  stream.write(fmt('visit again: %s\n', data.toString()));
})
.push('/', { headers: { cookie: 'view=100;' } }, function (data, res, stream) {
  if (data.toString() !== '1 views') {
    this.emit('fail', 'ctx.cookies.get should set options.signed = true');
    process.exit(1);
  }
  stream.write('signed cookie can not be tampered\n');
})
.generate();
