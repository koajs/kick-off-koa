Crea una app que haga uso de cookies para guardar el numero de visitas que hacen los usuarios.

1. la clave de la cookie es `view`, tienes que guardar el número de visitas en esta cookie.
2. cada vez que se le pregunte al servidor, este debe responder `{cuenta} views`.
3. la cookie tiene que estar firamada(`signed`).

visita a `/`:
=>
cuerpo de la respuesta: `1 views`
set-cookie: `view=1`

visita a `/` again:
=>
cuerpo de la respuesta: `2 views`
set-cookie: `view=2`

PISTAS

koa usa el mdulo `cookies` para gestionar cookies.

```
https://github.com/expressjs/cookies
```

APIs:

`ctx.cookies.get(name, [options])`: Get cookie name con opciones(options)
  - `signed`: the cookie requested should be signed

`ctx.cookies.set(name, value, [options])`: Set cookie name a un valor(value) con opciones(options)

  - `signed`: firmar el valor de la cookie
  - `expires`: añade una fecha de expiración a la cookie
  - `path`: path de la cookie, '/' por defecto
  - `domain`: dominio de la cookie
  - `secure`: exigir SSL/TLS para la cookie
  - `httpOnly`: server-accessible cookie, true por defecto

No olvides añadir `options.signed` en `get` y `set` para confirmar que la cookie este firmada.

Y para usar cookies firmadas, tiene que añadir `app.keys`:

```
var app = koa();
app.keys = ['secret', 'keys'];
```
