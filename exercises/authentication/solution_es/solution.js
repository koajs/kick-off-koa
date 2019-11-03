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
  if (this.session.authenticated) return this.body = 'hola mundo';
  this.status = 401;
});

/**
 * Si tiene éxito, el usuario autentificado es redireccionado a `/`.
 * pista: usa `this.redirect`
 */

app.use(function* login(next) {
  if (this.request.path !== '/login') return yield next;
  if (this.request.method === 'GET') return this.body = form;
  if (this.request.method !== 'POST') return;

  var body = yield parse(this);
  if (body.username !== 'username'
    || body.password !== 'password') return this.status = 400;

  this.session.authenticated = true;
  this.redirect('/');
});

/**
 * Redireccionemos a /login` despues de cada respuesta.
 * Si un usuario accede a /logout` cuando ya se ha deslogieado,
 * se considerara un "success" y no un error.
 */

app.use(function* logout(next) {
  if (this.request.path !== '/logout') return yield next;
  this.session.authenticated = false;
  this.redirect('/login');
});

app.listen(process.argv[2]);
