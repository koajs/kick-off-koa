Dans l’exercice précédent, nous avons appris à utiliser les cookies pour
stocker le nombre de visites de l’utilisateur.  Mais dans cet exercice-ci, nous
allons tenter d’utiliser les sessions pour faire la même chose.

Si vous visitez `/` :

* Corps de réponse : « vu 1 fois »
* En-tête `Set-Cookie` : `koa:sess=…`

Revenez-y :

* Corps de réponse : « vu 2 fois »
* En-tête `Set-Cookie` : `koa:sess=…`

## Conseils

Dans cet exercice, nous utiliserons `koa-session`, qu’il vous faut installer :

```
npm install koa-session
```

`koa-session` est basé sur des cookies signés, vous devez donc renseigner
`app.keys`.

```
var koa = require('koa');
var session = require('koa-session');

var app = koa();
app.keys = ['clés', 'secrètes'];

app.use(session(app));
```

Vous pouvez alors utiliser `this.session` dans les gestionnaires Koa.

## En savoir plus

`koa-session` fournit des sessions sur la base des cookies, et
`koa-generic-session` est plus générique, comme pour Express.

```
https://github.com/koajs/session
https://github.com/koajs/generic-session
```
