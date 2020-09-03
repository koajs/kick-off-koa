创建一个可以从命令行传递端口的 koa 服务器,当 HTTP GET 请求 / 时,回复'hello koa'

workShop 会执行对应的请求并且验证输出结果

提示

在所有的练习中,都需要 koa

安装 koa:

```
$ npm install koa
```

此外,koa 还需要 node v7.6.0 或更高版本来支持 ES2015 和异步功能,您可以使用 nvm 来安装更高版本:

```
https://github.com/creationix/nvm
```

如果您使用的是 Windows,您可以使用等效的 nvmw:

```
https://github.com/hakobera/nvmw
```

使用以下代码创建 koa 服务器并监听指定端口:

```
const Koa = require('koa');
const app = new Koa();

// 在这调用处理程序
// app.use(handlers);

app.listen(port);
```

可以通过以下代码获得端口号:

```
const port = process.argv[2];
```

可以使用像下面这样的匿名异步函数,也可以单独声明(就像 JavaScript 中那样 :P):

```
app.use(async ctx => {
  // 你可以像这样设置response body
  ctx.body = 'hello';
});
```

您可以在此处阅读有关 ECMAScript 6 异步函数的更多信息：

```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
```

Koa 的`Context`(`ctx` 异步函数的参数) 将 node 中的 `request` 和 `response` 封装到单个对象中,这为编写 web 应用程序和 API 提供了许多有用的方法. 如果需要了解 Koa 的`Context`,请访问 Koa 的官网

```
http://koajs.com
```
