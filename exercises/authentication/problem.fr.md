Dans les exercices précédents, nous avons appris à utiliser les routes,
`body-parser` et `session`.  Cette fois-ci, nous allons tenter de combiner
tout ça pour créer une appli très simple avec des fonctionnalités de connexion
et de déconnexion.  Nous définirons les routes suivantes :

1) `/`
  - Si la personne est loguée, elle devrait voir « Bonjour tout le monde ».
  - Sinon, elle aura une erreur 401 faute d’authentification.

2) `/login`
  - Avec la méthode GET, affiche un formulaire de connexion.
  - Avec la méthode POST, valide le corps de la requête et tente de connecter
     la personne ; en cas de connexion réussie, redirige sur `/`.

3) `/logout`
  - Déconnecte la personne et redirige sur `/login`.

On ne va pas s’embêter à gérer de véritables comptes utilisateurs pour cet
exercice.  La seule authentification que nous accepterons aura les noms et
valeurs de champs suivants :

```
username = username
password = password
```

Toute autre valeur renverra une erreur 400.

## Conseils

Voici un squelette prêt à l’emploi pour cette petite application.  Vous n’avez plus
qu’à le compléter.

```
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

});

/**
 * Si la connexion réussit, la personne est authentifiée et redirigée sur `/`.
 * Conseil : utilisez `this.redirect(…)`.
 */
app.use(function* login(next) {
  if (this.request.path !== '/login') return yield next;

  if (this.request.method === 'GET') return this.body = form;

});

/**
 * Redirigez sur `/login` quoi qu’il arrive.
 * Si une personne va sur `/logout` alors qu’elle est déjà déconnectée, on va
 * considérer que ce n’est pas une erreur.
 */
app.use(function* logout(next) {
  if (this.request.path !== '/logout') return yield next;

});

app.listen(process.argv[2]);
```
