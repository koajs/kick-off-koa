var fs = require('fs');
var path = require('path');
var colors = require('colors-tmpl');


function credits () {
  fs.readFile(path.join(__dirname, './credits.txt'), 'utf8', function (err, data) {
    if (err) {
      throw err;
    }
    console.log(colors(data));
  });
}

module.exports = credits;
