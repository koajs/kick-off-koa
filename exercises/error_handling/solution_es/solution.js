var koa = require('koa');

var app = koa();

app.use(errorHandler());

app.use(function* () {
  if (this.path === '/error') throw new Error('ooops');
  this.body = 'OK';
});

function errorHandler() {
  return function* (next) {
    // atrapamos todos los error aquí
    try {
      yield next;
    } catch (err) {
      // fijamos el status
      this.status = 500;
      // asignamos el cuerpo de la respuesta
      this.body = 'internal server error';
      // podemos emitir en la app para el log
      // this.app.emit('error', err, this);
    }
  };
}

app.listen(process.argv[2]);
