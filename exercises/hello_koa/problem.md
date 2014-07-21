Create a koa server that listens on a port passed from the command line and replies with "hello koa" when an HTTP GET request is sent to /.

The workshop will execute requests against the server and verify the output.

HINTS

In all these exercises, we need koa To install koa:

```
npm install koa
```

Also we need node 0.11.9 to run the koa applications, you can use nvm to install node 0.11.9

```
https://github.com/creationix/nvm
```

Create a server that listens on port 8080 with the following code:

```
var koa = require('koa');
var app = koa();

// hanlders here
// app.use(handlers);

app.listen(8080);
```

Handlers can be anonymous generate functions or separately declared (just like in javascript :P):

```
app.use(function *() {
  // you can set the response body in handler like this
  this.body = 'hello';
});
```

A Koa Context(`this` in middlewares) encapsulates node's `request` and `response` objects into a single object which provides many helpful methods for writing web applications and APIs. To learn more about Koa Context, please check the Koa website:

```
http://koajs.com
```

You can get the port by

```
var port = process.argv[2];
```
