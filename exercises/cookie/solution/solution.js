var Koa = require('koa');

var app = new Koa();

// to use signed cookie, we need to set app.keys
app.keys = ['secret', 'keys'];

app.use(async ctx => {
  var n = ~~ctx.cookies.get('view', { signed: true }) + 1;
  ctx.cookies.set('view', n, { signed: true });
  ctx.body = `${n} views`;
});

app.listen(process.argv[2]);
