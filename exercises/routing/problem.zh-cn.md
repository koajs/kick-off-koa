创建一个可以从命令行传递端口的 koa 服务器, 并且根据下面的路由返回不同的内容:

```
/    - hello koa
/404 - page not found
/500 - internal server error
```

提示

与Express和许多其他框架不同，Koa不包括路由管理(`router`)。虽然没有路由管理(`router`),但在Koa中可以使用 `ctx.path` 和 `await next()`. 要检查请求是否与特定路径匹配，请执行以下操作：

```
app.use(async (ctx, next) => {
  if (ctx.path === '/') {

  }
})
```

跳过该中间件:

```
app.use(async (ctx, next) => {
  if (skip) return await next();
})
```

将它们组合在一次, 可以按如下方式设置路由路径:

```
app.use(async (ctx, next) => {
  // 如果路由不匹配，则跳过其余代码
  if (ctx.path !== '/') return await next();

  ctx.body = 'we are at home!';
})
```

了解更多

当在使用路由时,您可能会对更多属性感兴趣:

- ctx.method
- ctx.query
- ctx.host

还有一些用于koa的路由器中间件，您可以在npm中找到它们：

- koa-route
- koa-router
- koa-resource-router
