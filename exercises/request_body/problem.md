Create a koa server which parse the post data, Convert the `name` field to
upper case and respond to client.

If you get this:

```
POST / with { name: 'koa' }
```

Respond with:

```
KOA
```

HINTS

There are several body parsers for Koa:

```
https://github.com/koajs/body-parser
https://github.com/koajs/body-parsers
```

However in this exercise, we just use `co-body` to parse the request body.
To use `co-body`, you need install from npm first:

```
npm install co-body
```

`co-body` is a yieldable, accept a `Koa Context` as its first argument.
So you can use it like this:

```
var parse = require('co-body');

// in Koa handler
var body = yield parse(this);
```
