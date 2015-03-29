Ajoutez un middleware de gestion d’erreurs à l’application Koa ci-dessous.

Le middleware `errorHandler` doit attraper toutes les erreurs survenues plus loin
dans la pile des middlewares, et répondre au client avec un statut `500` et un
corps de réponse `erreur serveur interne`.

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
    // capturez ici toutes les erreurs du reste de la pile
  };
}

app.listen(process.argv[2]);
```

## Conseils

Dans Koa, la gestion des erreurs est faite avec `try`/`catch` (sauf pour les
émetteurs d’événements).  Vous avez probablement oublié cette structure de
contrôle à force de travailler avec Express ou la plupart des autres frameworks
Node.  Contrairement à Express, les gestionnaires d’erreurs sont de simples
décorateurs que vous ajoutez en haut de votre pile de middlewares.

Vous pouvez définir le statut de la réponse comme ceci :

```
this.status = 404;
```

Chaque application Koa est une instance de `EventEmitter`.  Toutes les erreurs
qui ne sont rattrapées par aucun middleware sont envoyées dans
`app.on('error', function(err, context) { … })`.  C’est pratique pour les logs.
Toutefois, si vous créez votre propre gestionnaire d’erreurs (en les rattrapant
par exemple), vous devrez émettre ces événements vous-même.
