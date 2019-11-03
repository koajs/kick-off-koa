var views = require('co-views');
var koa = require('koa');
var app = module.exports = koa();

// configura las vistas, añadiendo .ejs
// cuando no se le añade extname a render()

var render = views(__dirname + '/views', {
  ext: 'ejs'
});

// datos de prueba

var user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

// render

app.use(function * () {
  this.body = yield render('user', {
    user: user
  });
});

app.listen(process.argv[2]);
