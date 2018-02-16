Create a koa server that listens on a port passed from the command line and replies with HTML, which is processed `ejs` template file when an HTTP GET request is sent to /.

The workshop will execute requests against the server and verify the output.

HINTS

First up, install the required dependencies:

```
npm install co-views ejs
```

Now, setup views:

```
const views = require('co-views');

const render = views(__dirname + '/views', {
  ext: 'ejs'
});
```

You might be wondering where is the `views` dir, that must be created by you and it must contain a `ejs` file, say `user.ejs` which looks like:

```
<p><%= user.name.first %> is a <%= user.age %> year old <%= user.species %>.</p>
```

Now that must give you a clue that it requires `user` object that might look like:

```
const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};
```

Having all this in placing and the below code to render the results, you can easily crack this.

```
ctx.body = await render('user', {user: user});
```

Good luck!
