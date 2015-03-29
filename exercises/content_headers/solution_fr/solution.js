var koa = require('koa');

var app = koa();

app.use(function* () {
  this.body = this.request.is('json')
    ? { message: 'salut !' }
    : 'ok';
});

app.listen(process.argv[2]);
