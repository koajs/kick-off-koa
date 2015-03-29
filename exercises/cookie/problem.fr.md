Créez une application qui utilise les cookies pour stocker le nombre de visites
d’un utilisateur.

1) La clé du cookie est `view`, vous y stockerez le nombre de vues.
2) Chaque fois qu’une requête est envoyée au serveur, la réponse doit être
   « vu {time} fois »
3) Le cookie doit être **signé**

Si vous visitez `/` :

* Corps de réponse : « vu 1 fois »
* En-tête `Set-Cookie` : `view=1`

Revenez-y :

* Corps de réponse : « vu 2 fois »
* En-tête `Set-Cookie` : `view=2`

## Conseils

Koa utilise le module `cookies` pour gérer les cookies.

```
https://github.com/expressjs/cookies
```

APIs :

`ctx.cookies.get(name, [options])` : récupère le cookie indiqué.
Options :

  - `signed` : le cookie doit être correctement signé

`ctx.cookies.set(name, value, [options])` : définit le cookie indiqué.
Options :

  - `signed`   : signer le cookie
  - `expires`  : une `Date` d’expiration du cookie
  - `path`     : le chemin du cookie, '/' par défaut
  - `domain`   : le domaine du cookie
  - `secure`   : exiger SSL/TLS pour le cookie
  - `httpOnly` : restreindre l’accès au cookie à la couche serveur, `true`
     par défaut.

N’oubliez pas de définir `options.signed` dans vos appels `get(…)` et `set(…)`
afin de vous assurer que le cookie est correctement signé.

Et pour utiliser des cookies signés justement, vous aurez besoin de définir
`app.keys` :

```
var app = koa();
app.keys = ['clés', 'secrètes'];
```
