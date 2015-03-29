var koa = require('koa');
var parse = require('co-body');
var session = require('koa-session');

var form = '<form action="/login" method="POST">\
  <input name="username" type="text" value="username">\
  <input name="password" type="password" placeholder="Le mot de passe est \'password\'">\
  <button type="submit">Connexion</button>\
</form>';

var app = koa();

// Utilisez koa-session quelque part au début de la pile.
// Nous avons besoin de définir les `.keys` pour les cookies signés
app.keys = ['secret1', 'secret2', 'secret3'];
app.use(session(app));

/**
 * Si `this.session.authenticated` existe, la personne voit « Bonjour tout le monde ».
 * Dans le cas contraire, elle reçoit une erreur 401, faute d’authentification.
 */
app.use(function* home(next) {
  if (this.request.path !== '/') return yield next;

  if (this.session.authenticated) return this.body = 'Bonjour tout le monde';

  this.status = 401;
});

/**
 * Si la connexion réussit, la personne est authentifiée et redirigée sur `/`.
 * Conseil : utilisez `this.redirect(…)`.
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
 * Redirigez sur `/login` quoi qu’il arrive.
 * Si une personne va sur `/logout` alors qu’elle est déjà déconnectée, on va
 * considérer que ce n’est pas une erreur.
 */
app.use(function* logout(next) {
  if (this.request.path !== '/logout') return yield next;

  this.session.authenticated = false;
  this.redirect('/login');
});

app.listen(process.argv[2]);
