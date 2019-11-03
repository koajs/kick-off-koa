Añade un middleware para el manejo de errores en esta aplicacion de Koa.
El middleware `errorHandler` debe atrapar todos los errores y responder al cliente con `internal server error` y un status `500`.

```
var koa = require('koa');

var app = koa();

app.use(errorHandler());

app.use(function* () {
  if (this.path === '/error') throw new Error('ooops');
  this.body = 'OK';
});

function errorHandler() {
  return function* (next) {
    // try catch todo el downstream errors aquí
  };
}

app.listen(process.argv[2]);

```


PISTAS

En Koa, el manejo de errores se realiza a través de `try/catch` (excepto con event emitters). Puede que no hayas visto últimamente esta aproximación si has estado trabajando con Express y las mayoría de frameworks de node.
Al contrario que en Express, los manejadores de errores son simplemente decoradores que añades al principio de tu pila de middlewares.

Puedes asignar el status de la respuesta así:

```
this.status = 404;
```

Cada app de Koa en una instancia de EventEmmiter. Todo los errores que no son atrapados por algún middleware son enviados a `app.on('error', function (err, context) {})`. Esto es útil para logear. Si creas tu propio gestor de errores (ej. atrapandolos), tendras que emitir los eventos manualmente.
