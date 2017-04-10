/**
 * gulpfile.js
 * @task - loads all tasks from `./internals/gulp/tasks/*`
 */
const argv = require('yargs').boolean('p').argv;
const glob = require('glob');
const gutil = require('gulp-util');
const path = require('path');

const isProduction = argv.p;

gutil.log(gutil.colors.bold('ℹ  Blaupause v2.4.1'));

if (isProduction) {
  gutil.log(gutil.colors.bold.green('🚚  Production Mode'));
} else {
  gutil.log(gutil.colors.bold.green('🔧  Development Mode'));
}

glob.sync('./internals/gulp/tasks/*.js').forEach((file) => {
  require(path.resolve(file)); // eslint-disable-line
});
