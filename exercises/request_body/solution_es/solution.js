var koa = require('koa');
var parse = require('co-body');

var app = koa();

app.use(function* (next) {
  // solo acepra peticiones POST
  if (this.method !== 'POST') return yield next;

  // tamaño del cuerpo limitado a `1kb`
  var body = yield parse(this, { limit: '1kb' });

  // si body.name no existe, responde `400`
  if (!body.name) this.throw(400, '.name required');

  this.body = body.name.toUpperCase();
});

app.listen(process.argv[2]);
