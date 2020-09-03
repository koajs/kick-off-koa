const Koa = require('koa');
const session = require('koa-session');

const app = new Koa();
app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(async ctx => {
  var n = ~~ctx.session.view + 1;
  ctx.session.view = n;
  ctx.body = `${n} views`;
});

app.listen(process.argv[2]);
