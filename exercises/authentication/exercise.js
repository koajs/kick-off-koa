var exercise = require('../../exercise');
var fmt = require('util').format;

var headers = {
  cookie: ''
};

module.exports = exercise
.push('/', function (data, res, stream) {
  if (res.statusCode !== 401) {
    console.log(res)
    this.emit('fail', 'GET /: non-logged-in user should get 401 error, but got ' + res.statusCode);
    process.exit(1);
  }
  stream.write('GET /: non-logged-in user get 401 error\n');
})

.push('/login', {
  method: 'POST',
  data: {
    username: 'xxxx',
    password: 'xxxx'
  }
}, function (data, res, stream) {
  if (res.statusCode !== 400) {
    this.emit('fail', 'POST /login: incorrect username or password must return 400 error');
    process.exit(1);
  }
  stream.write('POST /login: 400 error when incorrect username or password\n');
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
    this.emit('fail', 'POST /login: user should be redirected to `/`');
    process.exit(1);
  }
  headers.cookie = res.headers['set-cookie'].join(';');
  stream.write('POST /login: login successed\n');
})

.push('/', {
  headers: headers
}, function (data, res, stream) {
  stream.write('GET /: ' + data.toString() + '\n');
})
.push('/logout', {
  headers: headers
}, function (data, res, stream) {
  if (!~[302, 303].indexOf(res.statusCode)
    || !res.headers.location
    || res.headers.location !== '/login') {
    this.emit('fail', 'GET /logout: user should be redirected to `/login`');
    process.exit(1);
  }
  headers.cookie = res.headers['set-cookie'].join(';');
  stream.write('GET /logout: user is redirected to `/login`\n');
})

.push('/', {
  headers: headers
}, function (data, res, stream) {
  if (res.statusCode !== 401) {
    this.emit('fail', 'GET /: logout user should get 401 error');
    process.exit(1);
  }
  stream.write('GET /: logout user get 401 error\n');
})
.generate();
