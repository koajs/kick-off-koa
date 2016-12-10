Crea una app que devuelve un stream cuando el cliente envíe una petición a `/stream` y un JSON cuando el cliente envíe a `/json`.

Cuando la petición llega a `/json`, la salida debe ser

```
{ foo: 'bar' }
```

Cuando la petición llega a `/stream`, el servidor debe responder con el contenido del archivo `process.argv[3]`. Usa `fs.createReadStream`:

```
fs.createReadStream(process.argv[3]);
```

PISTAS

Hasta ahora, solo hemos usado strings como cuerpo. Koa soporta los siguientes tipos:

- Strings
- Buffers
- Streams (node)
- Objetos JSON

```
app.use(function* (next) {
  this.body = {
    message: '¡Este mensaje sera enviado como una respuesta JSON!'
  };
})
```

Cuando usamos un stream como cuerpo, Koa añadirá automáticamente manejadores de error, para que no tengas que preocuparte del manejo de errores.

```
var fs = require('fs');

app.use(function* (next) {
  this.body = fs.createReadStream('some_file.txt');
  // koa manejara automáticamente los errores y las perdidas.
})
```
