Complete the Koa application below, finish two middlewares:

- responseTime: record each request's response time(ms), set the response header `X-Response-Time`.
- upperCase: convert response body to upper case.

```
const Koa = require('koa');

const app = new Koa();

app.use(responseTime());
app.use(upperCase());

app.use(async ctx => {
  ctx.body = 'hello koa';
});

function responseTime() {
  return async (ctx, next) => {
    // record start time
    await next();
    // set X-Response-Time head
  };
}

function upperCase() {
  return async (ctx, next) => {
    // do nothing
    await next();
    // convert ctx.body to upper case
  };
}

app.listen(process.argv[2]);

```

HINT

In Koa, all middleware are essentially decorators for all following middleware:

```
app.use(async (ctx, next) => {
  // do something before next middleware executes
  await next();
  // do something after next middleware executes
});

// next middleware
app.use(async (ctx, next) => {
  ctx.body = 'hello world';
});
```

In koa middlewares, use `ctx.set(name, val)` to set a response header.
And change response body by reassign `ctx.body`.

READ MORE

View the `koajs` org to learn more about koa middlewares.

```
https://github.com/koajs
```
