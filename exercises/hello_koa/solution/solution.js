const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello koa';
});

app.listen(process.argv[2]);
