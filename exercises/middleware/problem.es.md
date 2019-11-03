Completa la aplicación de Koa que se presenta a continuación, acaba de rellenar los 2 middlewares:

- responseTime: calcula el tiempo(ms) de respuesta de cada petición, añade la cabecera `X-Response-Time` a la respuesta.
- upperCase: convierte el cuerpo de la respuesta a mayúsculas.

```
var koa = require('koa');

var app = koa();

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
  this.body = 'hello koa';
});

function responseTime() {
  return function* (next) {
    // calcula el tiempo inicial
    yield next;
    // añade la cabecera X-Response-Time
  };
}

function upperCase() {
  return function* (next) {
    // no hagas nada
    yield next;
    // convierte this.body a mayúsculas
  };
}

app.listen(process.argv[2]);

```

PISTAS

En Koa, todos los middlewares son esencialmente decoradores de los middlewares siguientes:

```
app.use(function* decorator(function (subapp) {
  // haz algo antes de ejecutar la subapp
  yield* subapp;
  // haz algo despues de ejecutar la subapp
}));

app.use(function* subapp(next) {
  this.response.body = 'hello world';
});
```

En los middlewares de Koa, usa `this.set(name, val)` para añadir una cabecera a la respuesta.
Y cambia el cuerpo de la respuesta resasignando `this.body`.

Leer más

Entra en `koajs` org para aprender más acerca de los middlewares koa.

```
https://github.com/koajs
```
