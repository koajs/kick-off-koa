var views = require('co-views');
var koa = require('koa');
var app = module.exports = koa();

// Configuration des vues, avec l’ajout de l’extension `.ejs`
// quand le nom passé à `render(…)` n’en contient pas.

var render = views(__dirname + '/views', {
  ext: 'ejs'
});

// Données d’exemple

var user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'furet',
  age: 3
};

// Rendering

app.use(function * () {
  this.body = yield render('user', {
    user: user
  });
});

app.listen(process.argv[2]);
