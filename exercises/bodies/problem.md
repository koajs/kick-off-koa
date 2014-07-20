Create an app that returns a stream when the client requests `/stream` and a JSON body when the client requests `/json`.

When requests `/json`, the output should like

```
{ foo: 'bar' }
```

When requests `/stream`, the server should respond content in file `process.argv[3]`. Use `fs.createReadStream`:

```
fs.createReadStream(process.argv[3]);
```

HINT

So far, we've only used strings as bodies. Koa supports the following types of bodies:

- Strings
- Buffers
- Streams (node)
- JSON Objects

```
app.use(function* (next) {
  this.body = {
    message: 'this will be sent as a JSON response!'
  };
})
```

When setting a stream as a body, Koa will automatically add any error handlers so you don't have to worry about error handling.

```
var fs = require('fs');

app.use(function* (next) {
  this.body = fs.createReadStream('some_file.txt');
  // koa will automatically handle errors and leaks
})
```
