创建一个Koa程序，该程序使用cookies存储用户查看路由的时间。

1. cookie的键是 `view`, 并在这个cookie中存储访问次数。
2. 每次查询服务器时,响应必须是 `{count} views`.
3. cookie 需要签名(`signed`).

visit `/`:
=>
response body: `1 views`
set-cookie: `view=1`

visit `/` again:
=>
response body: `2 views`
set-cookie: `view=2`

提示

koa使用`cookies`模块来操作cookies。

```
https://github.com/expressjs/cookies
```

APIs:

`ctx.cookies.get(name, [options])`: 使用`options`获取cookie名
  - `signed`: 对请求的cookie进行签名

`ctx.cookies.set(name, value, [options])`: 使用以下选项为cookie赋值：

  - `signed`: 签署cookie值
  - `expires`: cookie过期时间
  - `path`: cookie的路径,默认为`/`
  - `domain`: cookie域
  - `secure`: secure cookie
  - `httpOnly`: 是否仅允许服务器访问cookie，默认为true

别忘了在 `get` 和 `set`中设定 `options.signed`,来确保cookie已签名.

要使用签名cookies，需要设置 `app.keys`:

```
const app = new Koa();
app.keys = ['secret', 'keys'];
```
