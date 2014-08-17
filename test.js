var execSync = require('child_process').execSync;
var assert = require('assert');
var glob = require('glob');
var path = require('path');
var fs = require('fs');

var files = glob.sync('exercises/*/solution/solution.js');

files.forEach(function (file) {
  var name = path.basename(path.dirname(path.dirname(file)));
  execSync('./kick-off-koa.js select ' + name);
  var submission = execSync('./kick-off-koa.js run ' + file).toString();
  var result = fs.readFileSync(file.replace(/\.js$/, '.txt'), 'utf8');
  assert(submission === result);

  // check verify output include solution file
  var v = execSync('./kick-off-koa.js verify ' + file).toString();
  var solution = fs.readFileSync(file, 'utf8');
  assert(v.replace(/\s*/g, '').indexOf(solution.replace(/\s*/g, '')) >= 0);
});
