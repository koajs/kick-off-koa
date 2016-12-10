Crea un servidor en Koa que escucha en un puerto indicado por linea de comandos y responde con un HTML, el cual es una plantilla procesada con `ejs` cuando una petición HTTP GET es enviada a /.

El workshop ejecutara las peticiones al servidor y verificara la salida.

PISTAS

Primero, instala las dependencias requeridas:

```
npm install co-views ejs
```

Ahora, configura las vistas:

```
var views = require('co-views');

var render = views(__dirname + '/views', {
  ext: 'ejs'
});
```
Puede que estés pensando donde esta el directorio `views`, tienes que crearlo tu mismo y debe contener archivos `ejs`, `user.ejs` puede contener por ejemplo:

```
<p><%= user.name.first %> is a <%= user.age %> year old <%= user.species %>.</p>
```

Para rellenar la plantilla necesitaremos un objeto `user` que puede ser así:

```
var user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};
```
Con todo esto y el código siguiente para renderizar el resultado, puedes acabar el ejercicio fácilmente.

```
this.body = yield render('user', {user: user});
```

¡Buena suerte!
