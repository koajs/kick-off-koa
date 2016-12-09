var koa = require('koa');

var app = koa();

app.use(function* () {
  this.body = 'hola koa';
});

app.listen(process.argv[2]);
