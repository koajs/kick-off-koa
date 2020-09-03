const Koa = require('koa');
const parse = require('co-body');
const session = require('koa-session');

const form = '<form action="/login" method="POST">\
  <input name="username" type="text" value="username">\
  <input name="password" type="password" placeholder="The password is \'password\'">\
  <button type="submit">Submit</button>\
</form>';

const app = new Koa();

// use koa-session somewhere at the top of the app
// we need to set the `.keys` for signed cookies and the cookie-session module
app.keys = ['secret1', 'secret2', 'secret3'];
app.use(session(app));

/**
 * If `ctx.session.authenticated` exist, user will see 'hello world'
 * otherwise, people will get a `401` error  because they aren't logged in
 */
app.use(async (ctx, next) => {
  if (ctx.path !== '/') return await next();
  if (ctx.session.authenticated) return ctx.body = 'hello world';
  ctx.status = 401;
});

/**
 * If successful, the logged in user should be redirected to `/`.
 * hint: use `ctx.redirect`
 */
app.use(async (ctx, next) => {
  if (ctx.path !== '/login') return await next();
  if (ctx.method === 'GET') return ctx.body = form;
  if (ctx.method !== 'POST') return;

  const body = await parse(ctx);
  const {username, password} = body;
  if (username !== 'username' || password !== 'password') return ctx.status = 400;

  ctx.session.authenticated = true;
  ctx.redirect('/');
});

/**
 * Let's redirect to `/login` after every response.
 * If a user hits `/logout` when they're already logged out,
 * let's not consider that an error and rather a "success".
 */
app.use(async (ctx, next) => {
  if (ctx.path !== '/logout') return await next();
  ctx.session.authenticated = false;
  ctx.redirect('/login');
});

app.listen(process.argv[2]);
