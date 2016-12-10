Crea un servidor en koa que parsea los datos de una petición post. Convierte el campo `name` a mayúsculas y responde al cliente.

Si recibes esta petición:

```
POST / con { name: 'koa' }
```

Responde con:

```
KOA
```

PISTAS

Hay varios parseadores para Koa:

```
https://github.com/koajs/body-parser
https://github.com/koajs/body-parsers
```
Sin embargo, en este ejercicio, usaremos `co-body` para parsear el cuerpo de la respuesta.
Para usar `co-body`, primero necesitas instalar el paquete con npm:

```
npm install co-body
```

`co-body` es yieldable, acepta el `Contexto Koa` como su primer argumento.
Puedes usarlo así:

```
var parse = require('co-body');

// en un manejador de Koa
var body = yield parse(this);
```
