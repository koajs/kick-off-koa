In previous exercise, we learned how to use cookie to store user's view times.
But in this exercise, we will try to use session to do the same thing.

visit `/`:
=>
respond body: `1 views`
set-cookie: `view=1`

visit `/` again:
=>
respond body: `2 views`
set-cookie: `view=2`

HINT

In this exercise, we will use `koa-session`, to install:

```
npm install koa-session
```

`koa-session` base on signed cookie, so we must set `app.keys`.

```
var koa = require('koa');
var session = require('koa-session');

var app = koa();
app.keys = ['secret', 'keys'];

app.use(session());
```

Then you can use `this.session` in koa handler.

READ MORE

`koa-session` is cookie-base session, and `koa-generic-session` is the generic one like express.

```
https://github.com/koajs/session
https://github.com/koajs/generic-session
```
