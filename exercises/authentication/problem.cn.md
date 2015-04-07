在前面的章节中，我们学习了 `route`, `body-parser` 和 `session`，在这个练习里，我们将会试着把前面这些全部组合到一起来创建一个非常简单的应用，包括了登录和登出功能。首先，让我们定义下列路由：
- `/` - 如果用户已经登录，他们将会看到 `hello world`，否则，他们会得到一个 `401` 错误码，因为还没有登陆。
- `/login` - 如果是 `GET` 请求，用户将会看到一个表单，而如果是 `POST` 请求，将会验证请求中带过来的内容，尝试去登陆，如果登陆成功，则跳转到 `/`。
- `/logout` - 将会让用户退出登陆，之后跳转到 `/login` 登录页。

在这个例子中，我们不会真的创建一个用户，唯一的能够登陆的用户名和密码是：

```
username = username
password = password
```

所有的其他身份信息都会的到 `400` 状态码的错误。

提示

我们已经创建了这个简单应用的框架，让我们来完善它吧！

```
var koa = require('koa');
var parse = require('co-body');
var session = require('koa-session');

var form = '<form action="/login" method="POST">\
  <input name="username" type="text" value="username">\
  <input name="password" type="password" placeholder="The password is \'password\'">\
  <button type="submit">Submit</button>\
</form>';

var app = koa();

// 在应用的前面加入 koa-session 的中间件
// 为了能够给我们写到前端的 cookie 加密（加密后前端无法随意伪造 cookie），我们需要设置 `.keys`。
app.keys = ['secret1', 'secret2', 'secret3'];
app.use(session(app));

/**
 * 如果 `this.session.authenticated` 存在（已登录）, 用户将会看到 'hello world'
 * 否则，用户将会收到一个 `401` 的响应，因为他们还没有登录
 */

app.use(function* home(next) {
  if (this.request.path !== '/') return yield next;

});

/**
 * 如果登录成功，登录后的用户将会跳转到 `/`
 * 提示: 使用 `this.redirect`
 */

app.use(function* login(next) {
  if (this.request.path !== '/login') return yield next;
  if (this.request.method === 'GET') return this.body = form;

});

/**
 * 登出后跳转到 `/login` 登录页
 * 如果用户在点击 `/logout` 的时候并未登陆，我们不用把它当作一个错误，
 * 而是当做登陆成功处理就好了。
 */

app.use(function* logout(next) {
  if (this.request.path !== '/logout') return yield next;

});

app.listen(process.argv[2]);
```
