'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', function() {
  gulp.start('sass');
});
