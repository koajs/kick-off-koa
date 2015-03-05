var koa = require('koa');

var app = koa();

app.use(function* (next) {
  if (this.path !== '/') {
    return yield next;
  }

  this.body = 'bonjour koa';
});

app.use(function* (next) {
  if (this.path !== '/404') {
    return yield next;
  }

  this.body = 'page introuvable';
});

app.use(function* (next) {
  if (this.path !== '/500') {
    return yield next;
  }

  this.body = 'erreur serveur interne';
});

app.listen(process.argv[2]);
