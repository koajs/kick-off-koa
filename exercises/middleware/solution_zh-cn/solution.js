const Koa = require('koa');

const app = new Koa();

app.use(responseTime());
app.use(upperCase());

app.use(async ctx => {
  // step 3: respond `hello koa`
  ctx.body = 'hello koa';
});

function responseTime() {
  return async (ctx, next) => {
    // step 1: record start time
    const start = new Date;
    await next();
    // step 5: set X-Response-Time head
    ctx.set('X-Response-Time', new Date - start);
  };
}

function upperCase() {
  return async (ctx, next) => {
    // step 2: do nothing here
    await next();
    // step 4: convert ctx.body to upper case
    ctx.body = ctx.body.toUpperCase();
  };
}

app.listen(process.argv[2]);
