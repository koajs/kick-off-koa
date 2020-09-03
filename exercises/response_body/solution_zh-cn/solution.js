const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.path !== '/json') {
    return await next();
  }

  ctx.body = { foo: 'bar' };
});

app.use(async (ctx, next) => {
  if (ctx.path !== '/stream') {
    return await next();
  }

  ctx.body = fs.createReadStream(process.argv[3]);
});

app.listen(process.argv[2]);
