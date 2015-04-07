创建一个检查请求的 `Content-Type` 的应用，如果它是 `application/json` 则返回 `{message: 'hi'`}，同时也会返回对应的 http 响应头。否则的话就返回一个字符串：`ok`。

提示

请求和响应都有一系列的 content 相关的响应头，包括：

```
Content-Type
Content-Length
Content-Encoding
```

在所有的这些头中间，我们对 `type` 和 `length` 最感兴趣。Koa 有 `type` 和 `length` 的 getters/setters：

```
this.request.type
this.request.length
this.response.type
this.response.length
```

判断 `this.request.type` 相对而言会稍微困难一旦。例如，如何知道用户的请求类型是 text? 你绝对不想用正则表达式来一个个的尝试所有可能的类型，所以 Koa 提供了 `this.request.is()` 方法:

```
this.request.is('image/*') // => image/png
this.request.is('text') // => text or false
```

同时，Koa 也有 `this.response.is()`，和 `this.request.is()` 一样，但是用来判断响应的类型。

了解更多关于 `request.is()`:

```
http://koajs.com/#request-is-types-
```
