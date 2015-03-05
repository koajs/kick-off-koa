var koa = require('koa');

var app = koa();

app.use(errorHandler());

app.use(function* () {
  if (this.path === '/error') throw new Error('ooops');
  this.body = 'OK';
});

function errorHandler() {
  return function* (next) {
    // on capture ici toutes les erreurs du reste de la pile
    try {
      yield next;
    } catch (err) {
      // statut de la réponse
      this.status = 500;
      // corps de la réponse
      this.body = 'erreur serveur interne';
      // si on souhaite loguer l’erreur de façon générale, on ferait :
      // this.app.emit('error', err, this);
    }
  };
}

app.listen(process.argv[2]);
