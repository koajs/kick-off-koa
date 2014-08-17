var execSync = require('child_process').execSync;
var glob = require('glob');
var path = require('path');
var fs = require('fs');

var files = glob.sync('exercises/*/solution/solution.js');

files.forEach(function (file) {
  var name = path.basename(path.dirname(path.dirname(file)));
  execSync('./kick-off-koa.js select ' + name);
  var result = execSync('./kick-off-koa.js run ' + file);
  var dist = file.replace(/\.js$/, '.txt');
  fs.writeFileSync(dist, result);
});
