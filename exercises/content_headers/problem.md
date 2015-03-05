Create an app that checks the Content-Type of the request. If it's `application/json`, return `{message: 'hi!'}` with appropriate content headers. Otherwise, return `ok` as a string.

HINT

Both a request and a response could have various content headers. Some of these are:

```
Content-Type
Content-Length
Content-Encoding
```

Among many others. We're particularly interested in `type` and `length`. Koa has getters/setters for type and length:

```
this.request.type
this.request.length
this.response.type
this.response.length
```

Inferring `this.request.type` is a little difficult. For example, how do you know if the request is text? You don't want to use a regular expression or try all the possible mime types. Thus, Koa has `this.request.is()` for you:

```
this.request.is('image/*') // => image/png
this.request.is('text') // => text or false
```

Also Koa has `this.response.is()`, the same as `this.request.is()` but for the response.

Learn more about request.is().

```
http://koajs.com/#request-is-types-
```
