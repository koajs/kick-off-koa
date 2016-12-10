En el ejercicio anterior, aprendimos como usar cookies para guardar el número de visitas de los usuarios. Pero en este
ejercicio vamos a hacer uso de sesiones para conseguir lo mismo.

visita `/`:
=>
cuerpo de la respuesta: `1 views`
set-cookie: `koa:sess=…`

visita `/` de nuevo:
=>
cuerpo de la respuesta: `2 views`
set-cookie: `koa:sess=…`

PISTAS

En este ejercicio, usaremos `koa-session`, instálalo:

```
npm install koa-session
```

`koa-session` esta basado en cookies firmadas, por lo que debemos añadir `app.keys`.

```
var koa = require('koa');
var session = require('koa-session');

var app = koa();
app.keys = ['secret', 'keys'];

app.use(session(app));
```

Ahora puedes usar `this.session` en los manejadores de koa.

LEER MÁS

`koa-session` usa sesiones basadas en cookies, y `koa-generic-session` es una implementación mas genérica, como en Express.

```
https://github.com/koajs/session
https://github.com/koajs/generic-session
```
