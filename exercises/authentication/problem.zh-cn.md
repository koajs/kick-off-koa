在前面的练习,我们学习了 `route`, `body-parser` 和 `session`.在本练习中，我们将尝试将它们结合起来，创建一个具有登录和注销功能的非常简单的应用程序。让我们定义以下路由：

- `/` - 如果用户登陆了, 他们会看到 `hello world`. 否则,他们会看到 `401` 错误,因为他们没有登录
- `/login` - 如果请求方法是 `GET`, 将返回一个表单. 如果方法是 `POST`, 就验证请求体并尝试登录用户,如果登陆成功就跳转到 `/`.
- `/logout` - 注销用户然后跳转到 `/login`.

在这个例子中，我们实际上并不打算创建用户。唯一可接受的身份验证是：

```
username = 'username'
password = 'password'
```

其他身份验证都应出现“400”错误。

提示

我们已经为这个简单的程序创建了一个框架，让我们完成它！

```
const Koa = require('koa');
const parse = require('co-body');
const session = require('koa-session');

const form = '<form action="/login" method="POST">\
  <input name="username" type="text" value="username">\
  <input name="password" type="password" placeholder="The password is \'password\'">\
  <button type="submit">Submit</button>\
</form>';

const app = new Koa();

// 在程序顶部的某个地方使用`koa-session`
// 我们需要为已签名cookie和`cookie-session`模块设置“.keys”
app.keys = ['secret1', 'secret2', 'secret3'];
app.use(session(app));

/**
 * 如果`ctx.session.authenticated`存在，用户将看到`hello world`
 * 否则，用户将收到“401”错误，因为他们没有登录
 */

app.use(async (ctx, next) => {
  if (ctx.path !== '/') return await next();

});

/**
 * 如果成功，则应将登录用户重定向到`/`。
 * 提示:使用 `ctx.redirect`
 */

app.use(async (ctx, next) => {
  if (ctx.path !== '/login') return await next();
  if (ctx.method === 'GET') return ctx.body = form;

});

/**
 * 在每次响应后重定向到 `/login`.
 * 如果用户在注销后点击`/logout`，
 * 我们不要认为那是一个错误，而是一个"success"。
 */

app.use(async (ctx, next) => {
  if (ctx.path !== '/logout') return await next();

});

app.listen(process.argv[2]);
```
