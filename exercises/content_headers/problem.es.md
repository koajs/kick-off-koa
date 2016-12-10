Crea una app que compruebe el Content-Type de la petición. Si es `application/json`, devuelve `{message: 'hi!'}` con las cabeceras de contenido pertinentes. Para el resto, devuelve `ok` como un string.

PISTAS

Tanto una petición como una respuesta pueden tener varios tipos de cabeceras de contenido. Algunas son:

```
Content-Type
Content-Length
Content-Encoding
```

Entre muchas otras, estamos particularmente interesados en `type` y `length`. Koa tiene getters/setters para type y length:

```
this.request.type
this.request.length
this.response.type
this.response.length
```

Inferir `this.request.type` es un poco dificil. Por ejemplo, ¿Como puedes saber si la petición es un texto? No quieres usar una expresión regular o probar todos los mime types posibles. Por ello, Koa tiene `this.request.is()` preparado para ti:

```
this.request.is('image/*') // => image/png
this.request.is('text') // => text o false
```

Koa también tiene `this.response.is()`, al igual que `this.request.is()` pero para la respuesta.

Aprende más de request.is():

```
http://koajs.com/#request-is-types-
```
