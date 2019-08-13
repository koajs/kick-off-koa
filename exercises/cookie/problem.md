Create an app that uses cookies to store the times a user has viewed a route.

1. cookie's key is `view`, you need to store the number of views in this cookie.
2. every time the server is queried, the response must be `{count} views`.
3. cookie needs to be `signed`.

visit `/`:
=>
response body: `1 views`
set-cookie: `view=1`

visit `/` again:
=>
response body: `2 views`
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
const app = new Koa();
app.keys = ['secret', 'keys'];
```
