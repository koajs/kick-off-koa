创建一个解析post数据的koa服务器, 将`name`字段转换为大写并响应客户端。

如果得到这个:

```
POST / with { name: 'koa' }
```

响应这个:

```
KOA
```

提示

有几个用于koa的body parsers:

```
https://github.com/koajs/body-parser
https://github.com/koajs/body-parsers
```

不过，在本练习中，我们只使用`co-body`来解析请求正文。
要使用`co-body`，需要先从npm安装:

```
npm install co-body
```

`co-body`是可扩展的，接受`Koa Context`作为其第一个参数。
您可以像这样使用:

```
const parse = require('co-body');

// 在koa中调用
const body = await parse(ctx);
```
