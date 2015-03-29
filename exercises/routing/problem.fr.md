Créez un serveur Koa qui écoute sur un numéro de port passé en ligne de
commande, et renvoie les réponses suivantes pour chaque route indiquée :

```
/    - bonjour koa
/404 - page introuvable
/500 - erreur serveur interne
```

## Conseils

Contrairement à Express et à de nombreux autres frameworks, Koa n’inclut pas
de routeur.  Du coup, le routage dans Koa est effectué en examinant `this.path`
et en faisant un `yield next` si la route ne nous convient pas.  Pour vérifier
qu’une requête correspond à un chemin spécifique, on ferait comme ceci :

```
app.use(function* (next) {
  if (this.path === '/') {

  }
})
```

Et pour sauter le middleware courant :

```
app.use(function* (next) {
  if (skip) return yield next;
})
```

En combinant les deux, on peut gérer les routes comme ceci :

```
app.use(function* (next) {
  // sauter le rester du code si la route ne correspond pas
  if (this.path !== '/') return yield next;

  this.body = 'on est à la maison !';
})
```

## En savoir plus

Certaines propriétés vont sûrement vous intéresser pour le routage :

- this.method
- this.query
- this.host

On trouve également sur npm des middlewares de routage pour Koa :

- koa-route
- koa-router
- koa-resource-router
