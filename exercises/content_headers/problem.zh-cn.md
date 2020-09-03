创建检查请求内容类型的Koa服务端。如果是 `application/json`, 则返回有适当内容头(`content headers`)的 `{message: 'hi!'}`。否则,以字符串形式(`string`)返回`ok`

提示

请求和响应都可以有不同的内容头。其中包括：

```
Content-Type
Content-Length
Content-Encoding
```

在许多时候,我们对`type`和`length`会使用频繁.Koa具有`type`和`length`的取值器和赋值器(`getters/setters`)

```
ctx.request.type
ctx.request.length
ctx.response.type
ctx.response.length
```

推断`ctx.request.type`有点困难. 例如,如何知道请求是否为文本? 您不会想使用正则表达式或尝试所有可能的mime类型的。 因此,Koa为您准备了 `ctx.request.is()`:

```
ctx.request.is('image/*') // => image/png
ctx.request.is('text') // => text or false
```

既然koa有对于响应的推断方法 `ctx.response.is()`, 同样的也有对于请求的推断方法`ctx.request.is()` .

了解更多request.is().

```
http://koajs.com/#request-is-types-
```
