为下面的koa程序添加一个错误处理程序中间件。
`errorHandler` 需要可以捕获下游所有错误,
响应客户端`internal server error` 并且状态码为 `500`.

```
const Koa = require('koa');

const app = new Koa();

app.use(errorHandler());

app.use(async ctx => {
  if (ctx.path === '/error') throw new Error('ooops');
  ctx.body = 'OK';
});

function errorHandler() {
  return async (ctx, next) => {
    // 尝试捕获下游所有错误
  };
}

app.listen(process.argv[2]);

```


提示

在Koa中,错误处理是通过`try/catch`完成的(除了event emitters) .如果您使用的是Express和其他Node框架，那么您可能已经很久没有看到这种情况了。与Express不同，错误处理只是添加到中间件堆栈顶部的装饰器。

您可以通过下述代码设定状态码:

```
ctx.status = 404;
```

每个Koa程序都是一个EventEmitter实例。 任何中间件未捕获到的所有错误都将发送到 `app.on('error', function (err, context) {})`. 这对于日志记录非常有用。但是，如果您创建自己的错误处理程序（即捕捉它），则必须自己手动发出这些事件。
