var koa = require('koa');
var fs = require('fs');
var app = module.exports = koa();
var path = require('path');
var extname = path.extname;

app.use(function * () {
  var path = __dirname + this.path;
  if (fs.lstatSync(path).isFile()) {
    this.type = extname(path);
    this.body = fs.createReadStream(path);
  } else {
    this.satus = 404;
    this.body = "File not found.";
  }
});

app.listen(process.argv[2]);