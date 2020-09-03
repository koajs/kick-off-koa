创建一个在客户端请求`/stream`时返回流，请求`/JSON`时返回JSON的koa服务器

当请求`/json`时，输出应该是

```
{ foo: 'bar' }
```

当请求`/stream`时，服务端应该使用文件`process.argv[3]`的内容进行相应.使用`fs.createReadStream`:

```
fs.createReadStream(process.argv[3]);
```

提示

到目前为止,我们只使用了字符串(`strings`)作为响应体(`bodies`).Koa支持以下类型的响应体(`bodies`)

- Strings
- Buffers
- Streams (node)
- JSON Objects

```
app.use(async (ctx, next) => {
  ctx.body = {
    message: 'this will be sent as a JSON response!'
  };
})
```

当设置流(`stream`)为响应体时,KOA将自动添加错误处理程序，这样您就不必担心错误处理。

```
const fs = require('fs');

app.use(async (ctx, next) => {
  ctx.body = fs.createReadStream('some_file.txt');
  // Koa将会自动处理错误与泄露
})
```