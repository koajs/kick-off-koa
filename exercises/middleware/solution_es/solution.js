var koa = require('koa');

var app = koa();

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
  // paso 3: responde `hello koa`
  this.body = 'hello koa';
});

function responseTime() {
  return function* (next) {
    // paso 1: guarda el tiempo inicial
    var start = new Date;
    yield next;
    // paso 5: añade la cabecera X-Response-Time
    this.set('X-Response-Time', new Date - start);
  };
}

function upperCase() {
  return function* (next) {
    // paso 2: no hace nada aquí
    yield next;
    // paso 4: convierte this.body a mayúsculas
    this.body = this.body.toUpperCase();
  };
}

app.listen(process.argv[2]);
