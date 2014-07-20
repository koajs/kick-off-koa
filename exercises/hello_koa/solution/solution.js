var koa = require('koa');

var app = koa();

app.use(function* () {
  this.body = 'hello koa';
});

app.listen(process.argv[2]);
