var koa = require('koa');
var fs = require('fs');
var app = module.exports = koa();
var path = require('path');
var extname = path.extname;

app.use(function * () {
  var path = __dirname + this.path;
  var fstat = yield stat(path);

  if (fstat.isFile()) {
    this.type = extname(path);
    this.body = fs.createReadStream(path);
  } else {
    this.satus = 404;
    this.body = "File not found.";
  }

  function stat(file) {
    return function(done) {
      fs.stat(file, done);
    };
  }
});

if (!module.parent) app.listen(3000);

app.listen(process.argv[2]);