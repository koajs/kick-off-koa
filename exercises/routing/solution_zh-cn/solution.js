const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.path !== '/') {
    return await next();
  }

  ctx.body = 'hello koa';
});

app.use(async (ctx, next) => {
  if (ctx.path !== '/404') {
    return await next();
  }

  ctx.body = 'page not found';
});

app.use(async (ctx, next) => {
  if (ctx.path !== '/500') {
    return await next();
  }

  ctx.body = 'internal server error';
});

app.listen(process.argv[2]);
