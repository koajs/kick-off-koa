var through2 = require('through2');
var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var urllib = require('urllib');
var pedding = require('pedding');

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
    if (mode === 'verify' && exercise.solutionStdout) exercise.solutionStdout.end();
    return;
  }

  var n = mode === 'verify' ? 2 : 1;
  var done = pedding(query.bind(exercise, mode), n);

  // query submisstion server
  var submissionUrl = 'http://localhost:' + exercise.submissionPort + task[0];
  urllib.request(submissionUrl, task[1], function (err, data, res) {
    if (err) return error(err);

    var verify = task[2];
    verify(data, res, exercise.submissionStdout);
    done();
  });

  if (mode === 'verify') {
    // query solution server
    var solutionUrl = 'http://localhost:' + exercise.solutionPort + task[0];
    urllib.request(solutionUrl, task[1], function (err, data, res) {
      if (err) return error(err);

      var verify = task[2];
      verify(data, res, exercise.solutionStdout);
      done();
    });
  }

  function error (err) {
    exercise.emit('fail', 'Error connecting to ' + task[0] + ' : ' + err.code);
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

    this.submissionPort = Math.ceil(Math.random() * 10000) + 1024;
    this.solutionPort = this.submissionPort + 1;
    this.submissionCommand.unshift('--harmony');
    this.solutionCommand.unshift('--harmony');

    this.submissionCommand = this.submissionCommand.concat([this.submissionPort]).concat(argv);
    this.solutionCommand = this.solutionCommand.concat([this.solutionPort]).concat(argv);

    process.nextTick(callback);
  });

  // add a processor for both run and verify calls, added *before*
  // the comparestdout processor so we can mess with the stdouts
  exercise.addProcessor(function (mode, callback) {

    this.submissionStdout.pipe(process.stdout);
    // replace stdout with our own streams
    this.submissionStdout = through2();
    console.log('The submission server listen at port %s', this.submissionPort);
    if (mode === 'verify') {
      console.log('The solution server listen at port %s', this.solutionPort);
      this.solutionStdout = through2();
    }
    setTimeout(query.bind(this, mode), 500);
    process.nextTick(callback.bind(null, null, true));
  });


  // compare stdout of solution and submission
  exercise = comparestdout(exercise)
  return exercise;
};
