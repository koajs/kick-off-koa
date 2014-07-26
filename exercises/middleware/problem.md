Complete the Koa application below, finish two middlewares:

- responseTime: record each request's response time(ms), set the response header `X-Response-Time`.
- upperCase: convert response body to upper case.

```
var koa = require('koa');

var app = koa();

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
  this.body = 'hello koa';
});

function responseTime() {
  return function* (next) {
    // record start time
    yield next;
    // set X-Response-Time head
  };
}

function upperCase() {
  return function* (next) {
    // do nothing
    yield next;
    // convert this.body to upper case
  };
}

app.listen(process.argv[2]);

```

HINT

In Koa, all middleware are essentially decorators for all following middleware:

```
app.use(function* decorator(function (subapp) {
  // do something before subapp executes
  yield* subapp;
  // do something after subapp executes
}));

app.use(function* subapp(next) {
  this.response.body = 'hello world';
});
```

In koa middlewares, use `this.set(name, val)` to set a response header.
And change response body by reassign `this.body`.

READ MORE

View the `koajs` org to learn more about koa middlewares.

```
https://github.com/koajs
```
