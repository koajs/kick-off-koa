Create a koa server that listens on a port passed from the command line and replies with "hello koa" when an HTTP GET request is sent to /.

The workshop will execute requests against the server and verify the output.

HINTS

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

You can get the port by

```
var port = process.argv[2];
```
