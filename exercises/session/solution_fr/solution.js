var koa = require('koa');
var session = require('koa-session');

var app = koa();
app.keys = ['clés', 'secrètes'];

app.use(session(app));

app.use(function *(){
  var n = (+this.session.view || 0) + 1;
  this.session.view = n;
  this.body = 'vu ' + n + ' fois';
});

app.listen(process.argv[2]);
