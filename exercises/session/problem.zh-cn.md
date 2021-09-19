在前面的练习中，我们学习了如何使用cookies存储用户的查看次数。
在这个练习中，我们将尝试使用sessions来做同样的事情。

visit `/`:
=>
respond body: `1 views`
set-cookie: `koa:sess=…`

visit `/` again:
=>
respond body: `2 views`
set-cookie: `koa:sess=…`

提示

在这次练习中, 我们将使用 `koa-session`, 安装方法:

```
npm install koa-session
```

`koa-session` 是基于签名的cookies，因此我们必须设置 `app.keys`.

```
const Koa = require('koa');
const session = require('koa-session');

const app = new Koa();
app.keys = ['secret', 'keys'];

app.use(session(app));
```

然后可以在koa中使用 `ctx.session`.

了解更多

`koa-session`使用基于cookie的会话，而`koa-generic-session`是一个更通用的实现，如Express中所示。

```
https://github.com/koajs/session
https://github.com/koajs/generic-session
```
