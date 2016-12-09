Crea un servidor en koa que escucha en un puerto especificado por linea de comandos y responde con "hola koa" cuando recibe una petición HTTP GET a /.

El workshop ejecutara las peticiones al servidor y verificara la salida.

PISTAS

Para todos los ejercicios, necesitamos koa.

Para instalar koa:

```
npm install koa
```
También necesitamos node 0.11.9+ para poder ejecutar aplicaciones koa, puedes usar nvm para instalar node 0.11.9 o superior (ej. 0.12):

```
https://github.com/creationix/nvm
```

Si estas en Windows, usa el equivalente nvmw:

```
https://github.com/hakobera/nvmw
```

Crea un servidor que escucha en el número de puerto dado con el código que viene a continuación:

```
var koa = require('koa');
var app = koa();

// los manejadores aquí
// app.use(handlers);

app.listen(port);
```

Puedes obtener el puerto con

```
var port = process.argv[2];
```

Los manejadores (handlers) pueden ser funciones generadores anónimas o declaradas por separado (como en javascript :P):

```
app.use(function *() {
  // puedes asignar el cuerpo de la respuesta en un manejador así
   this.body = 'hello';
});
```
Puedes leer más sobre las funciones generador de ECMAScript 6 aquí:

```
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/function*
```


O con el workshop “Learn Generators” de NodeSchool:

```
https://github.com/isRuslan/learn-generators
```


El Contexto(`this` en middlewares)) de Koa encapsula los objetos `request` y `response` de node en un único objeto para ofrecer múltiples métodos que ayuden a escribir aplicaciones web y APIs. Para aprender mas sobre el Contexto de Koa, por favor visita la web de Koa:

```
http://koajs.com
```
