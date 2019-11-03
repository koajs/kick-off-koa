var koa = require('koa');

var app = koa();

// para usar cookies firmadas, necesitamos app.keys
app.keys = ['secret', 'keys'];

app.use(function *(){
  var n = ~~this.cookies.get('view', { signed: true }) + 1;
  this.cookies.set('view', n, { signed: true });
  this.body = n + ' views';
});

app.listen(process.argv[2]);
