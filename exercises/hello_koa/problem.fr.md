Créez un serveur koa qui écoute sur un numéro de port passé en ligne de
commande, et répond « bonjour koa » aux requêtes HTTP GET envoyées sur `/`.

Cet exercice exécutera des requêtes vers votre serveur et vérifiera leurs réponses.

## Conseils

Pour tous ces exercices, vous avez besoin de koa.

Pour installer koa :

```sh
$ npm install koa
```

Par ailleurs, vous aurez au minimum besoin de node.js 0.11.9 pour exécuter
des applications koa.  Utilisez par exemple nvm pour installer une version de
node.js suffisante, par exemple la version 0.12 :

```
https://github.com/creationix/nvm
```

Si vous êtes sur Windows, utilisez un équivalent :

```
https://github.com/hakobera/nvmw
```

Voici comment créer un serveur qui écoute sur un numéro de port donné :

```js
var koa = require('koa');
var app = koa();

// Vos gestionnaires ici…
// app.use(handler);

app.listen(port);
```

On obtient le port depuis la ligne de commande comme ceci :

```
var port = process.argv[2];
```

Les gestionnaires de requête peuvent être des fonctions générateurs anonymes ou déclarées séparément (c’est juste du JavaScript :P) :

```
app.use(function *() {
  // Vous pouvez définir le corps de réponse au sein du gestionnaire
  // comme ceci :
  this.body = 'hello';
});
```

Pour en apprendre davantage sur les fonctions générateurs en ECMAScript 6,
consultez cette documentation :

```
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/function*
```

Ou faites l’atelier NodeSchool « Learn Generators » :

```
https://github.com/isRuslan/learn-generators
```

Un contexte Koa (`this`, au sein des middlewares) encapsule les objets
`request` et `response` de Node en un seul objet qui fournit de nombreuses
méthodes utiles pour écrires vos applications web et APIs.  Pour en apprendre
davantage sur les contextes Koa, consultez la documentation :

```
http://koajs.com
```
