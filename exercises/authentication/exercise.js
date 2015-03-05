var exercise = require('../../exercise');
var fmt = require('util').format;

var headers = {
  cookie: ''
};

module.exports = exercise
.push('/', function (data, res, stream) {
  if (res.statusCode !== 401) {
    console.log(res)
    this.emit('fail', this.__('fail.no_initial_401', res.statusCode));
    process.exit(1);
  }
  stream.write(this.__('log.initial_401'));
})

.push('/login', {
  method: 'POST',
  data: {
    username: 'xxxx',
    password: 'xxxx'
  }
}, function (data, res, stream) {
  if (res.statusCode !== 400) {
    this.emit('fail', this.__('fail.no_auth_check'));
    process.exit(1);
  }
  stream.write(this.__('log.auth_check'));
})

.push('/login', {
  method: 'POST',
  data: {
    username: 'username',
    password: 'password'
  }
}, function (data, res, stream) {
  if (!~[302, 303].indexOf(res.statusCode)
    || !res.headers.location
    || res.headers.location !== '/') {
    this.emit('fail', this.__('fail.no_login_redirect'));
    process.exit(1);
  }
  headers.cookie = res.headers['set-cookie'].join(';');
  stream.write(this.__('log.login_redirect'));
})

.push('/', {
  headers: headers
}, function (data, res, stream) {
  stream.write('GET /       : ' + data.toString() + '\n');
})
.push('/logout', {
  headers: headers
}, function (data, res, stream) {
  if (!~[302, 303].indexOf(res.statusCode)
    || !res.headers.location
    || res.headers.location !== '/login') {
    this.emit('fail', this.__('fail.no_logout_redirect'));
    process.exit(1);
  }
  headers.cookie = res.headers['set-cookie'].join(';');
  stream.write(this.__('log.logout_redirect'));
})

.push('/', {
  headers: headers
}, function (data, res, stream) {
  if (res.statusCode !== 401) {
    this.emit('fail', this.__('fail.no_final_401'));
    process.exit(1);
  }
  stream.write(this.__('log.final_401'));
})
.generate();
