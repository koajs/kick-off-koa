Créez un serveur Koa qui analyse les données reçues dans le corps d’une requête
POST, convertissez le champ `name` en majuscules et renvoyez-le au client.

Pour la requête suivante :

```
POST / avec { name: 'koa' }
```

Répondez ceci :

```
KOA
```

## Conseils

Il existe plusieurs modules d’analyse des corps de requête pour Koa :

```
https://github.com/koajs/body-parser
https://github.com/koajs/body-parsers
```

Toutefois, pour cet exercice, nous utiliserons simplement `co-body`, qui
réalise une analyse basique du corps des requêtes.  Pour utiliser ce module,
installez-le d’abord avec npm :

```
npm install co-body
```

`co-body` est un *yieldable*, qui prend le contexte Koa comme premier argument.
Du coup, vous pouvez l’utiliser comme suit :

```
var parse = require('co-body');

// Dans le gestionnaire/middleware Koa :
var body = yield parse(this);
```
