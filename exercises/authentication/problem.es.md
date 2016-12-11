En ejercicios anteriores, hemos aprendido `route`, `body-parser` y `session`. En este ejercicio, intentaremos combinarlos todos para crear una app muy simple con funcionalidad de login y logout. Definamos las siguientes rutas:

- `/` - Si el usuario esta logueado, debería ver `hola mundo`. Si no, debería recibir un error `401` porque no esta logueado.
- `/login` - Si el método es `GET`, devolverá un formulario. Si es `POST`, validara el cuerpo de la petición e intentara loguear al usuario, si el login tiene éxito, se redireccionara a ´/´.
- `/logout` - Debería desloguear al usuario y redirigirle a `/login`.

En este ejemplo no vamos a crear usuarios. La única autenticación posible será:

```
username = username
password = password
```

Cualquier otra combinación recibira un error `400`.

PISTAS

Ya hemos creado la base para esta app, ¡Completémosla!

```
var koa = require('koa');
var parse = require('co-body');
var session = require('koa-session');

var form = '<form action="/login" method="POST">\
  <input name="username" type="text" value="username">\
  <input name="password" type="password" placeholder="The password is \'password\'">\
  <button type="submit">Submit</button>\
</form>';

var app = koa();

// usa koa-session en algun sitio por el principio de la app
// necesitamos crear `.keys` para las cookies firmadas y el módulo cookie-session
app.keys = ['secret1', 'secret2', 'secret3'];
app.use(session(app));

/**
 * Si `this.session.authenticated` existe, el usuario vera 'hola mundo'
 * si no, recibita un error 401` porque no esta autenticados.
 */

app.use(function* home(next) {
  if (this.request.path !== '/') return yield next;

});

/**
 * Si tiene éxito, el usuario autentificado es redireccionado a `/`.
 * pista: usa `this.redirect`
 */

app.use(function* login(next) {
  if (this.request.path !== '/login') return yield next;
  if (this.request.method === 'GET') return this.body = form;

});

/**
 * Redireccionemos a /login` despues de cada respuesta.
 * Si un usuario accede a /logout` cuando ya se ha deslogieado,
 * se considerara un "success" y no un error.
 */

app.use(function* logout(next) {
  if (this.request.path !== '/logout') return yield next;

});

app.listen(process.argv[2]);
```
