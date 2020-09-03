const Koa = require('koa');

const app = new Koa();

app.use(errorHandler());

app.use(async ctx => {
  if (ctx.path === '/error') throw new Error('ooops');
  ctx.body = 'OK';
});

function errorHandler() {
  return async (ctx, next) => {
    // we catch all downstream errors here
    try {
      await next();
    } catch (err) {
      // set response status
      ctx.status = 500;
      // set response body
      ctx.body = 'internal server error';
      // can emit on app for log
      // app.emit('error', err, ctx);
    }
  };
}

app.listen(process.argv[2]);
