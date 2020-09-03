const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
  ctx.body = ctx.request.is('json')
    ? { message: 'hi!' }
    : 'ok';
});

app.listen(process.argv[2]);
