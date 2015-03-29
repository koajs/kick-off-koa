Complétez l’application Koa ci-dessous, en terminant les deux middlewares :

- `responseTime` : enregistrez le temps de réponse pour chaque requête (en ms),
   et utilisez-le pour définir l’en-tête de réponse `X-Response-Time`.
- `upperCase` : convertissez le corps de réponse en majuscules.

```
var koa = require('koa');

var app = koa();

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
  this.body = 'bonjour koa';
});

function responseTime() {
  return function* (next) {
    // sauvez le moment de début de réponse
    yield next;
    // définissez l’en-tête `X-Response-Time` correctement
  };
}

function upperCase() {
  return function* (next) {
    // rien avant
    yield next;
    // convertissez `this.body` en majuscules
  };
}

app.listen(process.argv[2]);
```

## Conseils

Avec Koa, tous les middlewares sont, pour l’essentiel, des décorateurs pour
les middlewares qui les suivent :

```
app.use(function* decorator(function (subapp) {
  // faire un truc avant que `subapp` ne s’exécute
  yield* subapp;
  // faire un truc après que `subapp` s’exécute
}));

app.use(function* subapp(next) {
  this.response.body = 'Bonjour tout le monde';
});
```

Dans les middlewares Koa, utilisez `this.set(name, val)` pour définir un
en-tête de réponse.  Vous pouvez modifier le corps de réponse en ré-affectant
`this.body`.

## En savoir plus

Le compte GitHub `koajs` contient de nombreux middlewares Koa.

```
https://github.com/koajs
```
