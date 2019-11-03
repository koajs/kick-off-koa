Create a koa server that listen on a port passed from the command line, and returns the following responses from the following routes:
Crea un servidor en koa que escucha en un puerto especificado por linea de comandos, devuelve las siguientes respuestas para las rutas especificadas:

```
/    - hola koa
/404 - page not found
/500 - internal server error
```

PISTAS

Al contrario que Express y muchos otros frameworks, Koa no incluye un router. Sin router, el enrutamiento en koa se puede hacer usando `this.path` y `yield next`. Para comprobar si la petición coincide con un path:

```
app.use(function* (next) {
  if (this.path === '/') {

  }
})
```
Para saltarse este middleware:

```
app.use(function* (next) {
  if (skip) return yield next;
})
```
Combinando estas dos técnicas, se puede enrutar los paths de las siguiente manera:

```
app.use(function* (next) {
  // salta el resto del código si la ruta ni coincide
  if (this.path !== '/') return yield next;

  this.body = '¡Estamos en casa!';
})
```

Aprende Más

Hay mas propiedades en las que puedes estar interesado al enrutar:

- this.method
- this.query
- this.host

También hay middelwares de routing(enrutamiento) para Koa, puedes encontrarlos en npm:

- koa-route
- koa-router
- koa-resource-router
