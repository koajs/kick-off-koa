完成下面的Koa应用程序，完成两个中间件：

- responseTime: 记录每个请求的响应时间(ms), 设置响应头 `X-Response-Time`.
- upperCase: 将响应体内容转化为大写.

```
const Koa = require('koa');

const app = new Koa();

app.use(responseTime());
app.use(upperCase());

app.use(async ctx => {
  ctx.body = 'hello koa';
});

function responseTime() {
  return async (ctx, next) => {
    // 记录开始时间
    await next();
    // 设置响应头 `X-Response-Time`.
  };
}

function upperCase() {
  return async (ctx, next) => {
    // 什么也不做
    await next();
    // 转换ctx.body内容为大写
  };
}

app.listen(process.argv[2]);

```

提示

在Koa中，所有中间件本质上都是以下中间件的装饰器：

```
app.use(async (ctx, next) => {
  // 在下一个中间件执行之前做些什么
  await next();
  // 在下一个中间件执行后做些什么
});

// 下一个中间件
app.use(async (ctx, next) => {
  ctx.body = 'hello world';
});
```

在Koa中间件中, 使用 `ctx.set(name, val)` 来设置响应头.
通过重新赋值 `ctx.body`更改响应体.

阅读更多

请访问 `koajs` 以了解有关koa中间件的更多信息。

```
https://github.com/koajs
```
