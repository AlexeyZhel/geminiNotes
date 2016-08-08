'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src('./src/app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
