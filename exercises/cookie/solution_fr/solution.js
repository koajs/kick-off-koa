var koa = require('koa');

var app = koa();

// Pour pouvoir signer les cookies, on doit définir `app.keys`.
app.keys = ['clés', 'secrètes'];

app.use(function *(){
  var n = (+this.cookies.get('view', { signed: true }) || 0) + 1;
  this.cookies.set('view', n, { signed: true });
  this.body = 'vu ' + n + ' fois';
});

app.listen(process.argv[2]);
