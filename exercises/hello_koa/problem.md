Create a koa server that listens on a port passed from the command line and replies with "hello koa" when an HTTP GET request is sent to /.

The workshop will execute requests against the server and verify the output.

HINTS

In all these exercises, we need koa.

To install koa:

```
$ npm install koa
```

Also koa requires node v7.6.0 or higher for ES2015 and async function support. you can use nvm to install it:

```
https://github.com/creationix/nvm
```

If you are on Windows, use the equivalent nvmw:

```
https://github.com/hakobera/nvmw
```

Create a server that listens on a given port number with the following code:

```
const Koa = require('koa');
const app = new Koa();

// handlers here
// app.use(handlers);

app.listen(port);
```

You can get the port by

```
const port = process.argv[2];
```

Handlers can be anonymous async functions or separately declared (just like in javascript :P):

```
app.use(async ctx => {
  // you can set the response body in handler like this
  ctx.body = 'hello';
});
```

You can read more about ECMAScript 6 async functions here:

```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
```

A Koa Context(`ctx` parameter of async function) encapsulates node's `request` and `response` objects into a single object which provides many helpful methods for writing web applications and APIs. To learn more about Koa Context, please check the Koa website:

```
http://koajs.com
```
