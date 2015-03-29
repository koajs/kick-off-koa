var koa = require('koa');
var parse = require('co-body');

var app = koa();

app.use(function* (next) {
  // on accepte uniquement les requêtes POST
  if (this.method !== 'POST') return yield next;

  // taille maximum du corps de requête : 1 Ko
  var body = yield parse(this, { limit: '1kb' });

  // si body.name n’existe pas, on répond `400`
  if (!body.name) this.throw(400, '.name requis');

  this.body = body.name.toUpperCase();
});

app.listen(process.argv[2]);
