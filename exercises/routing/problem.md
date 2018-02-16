Create a koa server that listen on a port passed from the command line, and returns the following responses from the following routes:

```
/    - hello koa
/404 - page not found
/500 - internal server error
```

HINTS

Unlike Express and many other frameworks, Koa does not include a router. Without a router, routing in Koa can be done by using `ctx.path` and `await next()`. To check if the request matches a specific path:

```
app.use(async (ctx, next) => {
  if (ctx.path === '/') {

  }
})
```

To skip this middleware:

```
app.use(async (ctx, next) => {
  if (skip) return await next();
})
```

Combining this together, you can route paths like this:

```
app.use(async (ctx, next) => {
  // skip the rest of the code if the route does not match
  if (ctx.path !== '/') return await next();

  ctx.body = 'we are at home!';
})
```

Learn More

There are more properties you're probably interested in when routing:

- ctx.method
- ctx.query
- ctx.host

Also there are some router middlewares for koa, you can find them in npm:

- koa-route
- koa-router
- koa-resource-router
