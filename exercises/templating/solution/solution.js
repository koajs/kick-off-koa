const views = require('co-views');
const Koa = require('koa');
const app = module.exports = new Koa();

// setup views, appending .ejs
// when no extname is given to render()
const render = views(__dirname + '/views', {
  ext: 'ejs'
});

// dummy data
const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

// render
app.use(async ctx => {
  ctx.body = await render('user', {
    user: user
  });
});

app.listen(process.argv[2]);
