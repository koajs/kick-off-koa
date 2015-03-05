Create an app that use cookie to store user's view times.

1. cookie's key is `view`, you need store the view times in this cookie.
2. every time request the server, respond must be `{time} views`.
3. cookie need be `signed`

visit `/`:
=>
respond body: `1 views`
set-cookie: `view=1`

visit `/` again:
=>
respond body: `2 views`
set-cookie: `view=2`

HINT

koa uses the `cookies` module to operate cookies.

```
https://github.com/expressjs/cookies
```

APIs:

`ctx.cookies.get(name, [options])`: Get cookie name with options
  - `signed`: the cookie requested should be signed

`ctx.cookies.set(name, value, [options])`: Set cookie name to value with options:

  - `signed`: sign the cookie value
  - `expires`: a Date for cookie expiration
  - `path`: cookie path, '/' by default
  - `domain`: cookie domain
  - `secure`: secure cookie
  - `httpOnly`: server-accessible cookie, true by default

Don't forget to set `options.signed` in `get` and `set` to make sure the cookie is signed.

And to use signed cookies, you need set `app.keys`:

```
var app = koa();
app.keys = ['secret', 'keys'];
```
