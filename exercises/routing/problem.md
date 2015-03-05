Create a koa server that listen on a port passed from the command line, and returns the following responses from the following routes:

```
/    - hello koa
/404 - page not found
/500 - internal server error
```

HINTS

Unlike Express and many other frameworks, Koa does not include a router. Without a router, routing in Koa can be done by using `this.path` and `yield next`. To check if the request matches a specific path:

```
app.use(function* (next) {
  if (this.path === '/') {

  }
})
```

To skip this middleware:

```
app.use(function* (next) {
  if (skip) return yield next;
})
```

Combining this together, you can route paths like this:

```
app.use(function* (next) {
  // skip the rest of the code if the route does not match
  if (this.path !== '/') return yield next;

  this.body = 'we are at home!';
})
```

Learn More

There are more properties you're probably interested in when routing:

- this.method
- this.query
- this.host

Also there are some router middlewares for koa, you can find them in npm:

- koa-route
- koa-router
- koa-resource-router
