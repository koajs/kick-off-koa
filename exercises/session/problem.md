In the previous exercise, we learned how to use cookies to store the user's
view times.  But in this exercise, we will try to use sessions to do the same
thing.

visit `/`:
=>
respond body: `1 views`
set-cookie: `koa:sess=…`

visit `/` again:
=>
respond body: `2 views`
set-cookie: `koa:sess=…`

HINT

In this exercise, we will use `koa-session`, so install it:

```
npm install koa-session
```

`koa-session` is based on signed cookies, so we must set `app.keys`.

```
var koa = require('koa');
var session = require('koa-session');

var app = koa();
app.keys = ['secret', 'keys'];

app.use(session(app));
```

Then you can use `this.session` in koa handlers.

READ MORE

`koa-session` uses cookie-based sessions, and `koa-generic-session` is a more
generic implementation, as in Express.

```
https://github.com/koajs/session
https://github.com/koajs/generic-session
```
