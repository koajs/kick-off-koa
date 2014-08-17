var through2 = require('through2');
var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var urllib = require('urllib');
var pedding = require('pedding');
var fmt = require('util').format;
var freeport = require('freeport');
var fs = require('fs');
var path = require('path');

var argv = [];
exports.argv = function () {
  var args = [].slice.call(arguments);
  argv = argv.concat(args);
  return exports;
};

var tasks = [];
exports.push = function (path, options, verify) {
  if (arguments.length === 1) {
    tasks.push(['/', {}, path]);
  } else if (arguments.length === 2) {
    tasks.push([path, {}, options]);
  } else {
    tasks.push([path, options, verify]);
  }
  return exports;
};

function query(mode) {
  var exercise = this;
  var task = tasks.shift();

  // end stream when task list empty
  if (!task) {
    exercise.submissionStdout.end();
    return;
  }

  // query submisstion server
  var submissionUrl = 'http://localhost:' + exercise.submissionPort + task[0];
  urllib.request(submissionUrl, task[1], function (err, data, res) {
    if (err) return error(err, 'submission');

    var verify = task[2];
    verify.call(exercise, data, res, exercise.submissionStdout);
    query.call(exercise, mode);
  });

  function error (err, type) {
    var port = type === 'solution'
      ? exercise.solutionPort
      : exercise.submissionPort;

    var msg = fmt('Error connecting to %s server(http://localhost:%s%s), options: %j. %s',
      type, port, task[0], task[1], err.stack);
    exercise.emit('fail', msg);
  };
}

exports.generate = function () {
  // the output will be long lines so make the comparison take that into account
  exercise.longCompareOutput = true;

  // checks that the submission file actually exists
  // execute the solution and submission in parallel with spawn()
  exercise = execute(filecheck(exercise));

  // set up the data file to be passed to the submission

  exercise.addSetup(function (mode, callback) {
    this.submissionCommand.unshift('--harmony');

    var self = this;
    freeport(function (err, port) {
      if (err) throw err;
      self.submissionPort = port;

      self.submissionCommand = self.submissionCommand.concat([self.submissionPort]).concat(argv);
      setImmediate(callback);
    });
  });

  // add a processor for both run and verify calls, added *before*
  // the comparestdout processor so we can mess with the stdouts
  exercise.addProcessor(function (mode, callback) {

    this.submissionStdout.pipe(process.stdout);
    // replace stdout with our own streams
    this.submissionStdout = through2();
    if (mode === 'verify') {
      var solutionFile = path.join(this.dir, 'solution/solution.txt');
      this.solutionStdout = fs.createReadStream(solutionFile);
      // this.solutionStdout = fs.createReadStream();
    }
    setTimeout(query.bind(this, mode), 500);
    process.nextTick(callback.bind(null, null, true));
  });


  // compare stdout of solution and submission
  exercise = comparestdout(exercise)
  return exercise;
};
