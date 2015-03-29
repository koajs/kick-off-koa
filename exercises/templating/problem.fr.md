Créez un serveur Koa qui écoute sur le numéro de port passé en ligne de
commande et répond aux requêtes HTTP GET sur `/` par du HTML obtenu en
traitant un fichier de gabarit au format `ejs`.

Cet exercice exécutera des requêtes vers votre serveur et vérifiera leurs réponses.

## Conseils

Pour commencer, installez les dépendances nécessaires :

```
npm install co-views ejs
```

Puis configurez la gestion des vues :

```
var views = require('co-views');

var render = views(__dirname + '/views', {
  ext: 'ejs'
});
```

Vous vous demandez peut-être où est ce répertoire `views` ?  Vous devez le
créer dans le même dossier que votre fichier d’exercice, et vous assurer qu’il
contient bien un fichier EJS, par exemple `user.ejs`, qui ressemble à ceci :

```
<p><%= user.name.first %> est un <%= user.species %> de <%= user.age %> ans.</p>
```

Cela doit vous donner une idée de l’objet `user`, qui doit ressembler à ça :

```
var user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'furet',
  age: 3
};
```

Une fois tout ceci mis en place, et avec le code ci-dessous pour restituer
les résultats au format HTML, ça devrait être un exercice facile.

```
this.body = yield render('user', { user: user });
```

Bonne chance !
