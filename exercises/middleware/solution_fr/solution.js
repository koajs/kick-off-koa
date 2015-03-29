var koa = require('koa');

var app = koa();

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
  // étape 3 : répondre « bonjour koa »
  this.body = 'hello koa';
});

function responseTime() {
  return function* (next) {
    // étape 1 : sauver le moment de début de réponse
    var start = new Date;
    yield next;
    // étape 5 : définir l’en-tête `X-Response-Time`
    this.set('X-Response-Time', new Date - start);
  };
}

function upperCase() {
  return function* (next) {
    // étape 2 : rien avant
    yield next;
    // étape 4 : convertir `this.body` en majuscules
    this.body = this.body.toUpperCase();
  };
}

app.listen(process.argv[2]);
