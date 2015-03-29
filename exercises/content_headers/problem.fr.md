Créez une app qui vérifie le Content-Type de la requête.  S’il s’agit de
`application/json`, renvoyez `{ message: 'salut !' }` avec les bons en-têtes
de contenu.  Sinon, renvoyez la chaîne de caractères `'ok'`.

## Conseils

La requête comme la réponse peuvent avoir divers en-têtes de contenu.  En voici
quelques-uns parmi d’autres :

```
Content-Type
Content-Length
Content-Encoding
```

On s’intéresse particulièrement à `type` et `length`.  Koa fournit des
accesseurs en lecture et en écriture pour ces deux-là :

```
this.request.type
this.request.length
this.response.type
this.response.length
```

Il est un peu difficile de correctement interpréter `this.request.type`.  Par
exemple, comment savoir si la requête est de type texte ?  On aimerait éviter de
devoir s’empêtrer dans des expressions rationnelles ou de parcourir une liste
supposée exhaustive de tous les types MIME possibles.  C’est pourquoi Koa
vous fournit `this.request.is(…)` :

```
this.request.is('image/*') // => `'image/png'`
this.request.is('text')    // => `'text'` ou false
```

Koa fournit également `this.response.is(…)`, selon le même principe.

Vous pouvez en apprendre plus sur leur fonctionnement ici :

```
http://koajs.com/#request-is-types-
```
