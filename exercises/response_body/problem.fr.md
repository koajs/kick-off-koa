Créez une application qui :

* renvoie un flux quand le client fait une requête vers `/stream`
* renvoie un contenu JSON quand le client fait une requête vers `/json`

Lors d’une requête vers `/json`, la réponse devrait être :

```
{ foo: 'bar' }
```

Lors d’une requête vers `/stream`, le serveur derait répondre avec le contenu
du fichier dont le chemin sera passé dans `process.argv[3]`.  Utilisez la
méthode noyau `fs.createReadStream(…)` :

```
fs.createReadStream(process.argv[3]);
```

## Conseils

Jusqu’ici nous n’avions utilisé que des `String`s comme corps de réponses.  Koa
prend en charge les types de corps suivants :

- `String`s
- `Buffer`s
- Flux Node (*streams*)
- Objets JSON

```
app.use(function* (next) {
  this.body = {
    message: 'ceci sera envoyé en tant que réponse JSON !'
  };
})
```

Lorsque vous définissez un flux comme corps de réponse, Koa ajoutera
automatiquement les gestionnaires d’erreurs adéquats, vous n’avez donc pas à
vous en soucier.

```
var fs = require('fs');

app.use(function* (next) {
  this.body = fs.createReadStream('some_file.txt');
  // Koa gèrera automatiquement les erreurs et autres aspects du flux
})
```
