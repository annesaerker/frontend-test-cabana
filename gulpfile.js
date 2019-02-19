"use strict";

var gulp = require('gulp'),
  path = require('path'),
  data = require('gulp-data'),
  pug = require('gulp-pug'),
  prefix = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync');

var paths = {
  public: './public/',
  sass: './src/sass/',
  css: './public/css/',
  js: './public/js/',
  assets: './public/assets/images',
  data: './src/_data/'
};

gulp.task('pug', function () {
  return gulp.src('./src/*.pug')
    .pipe(data(function (file) {
      return require(paths.data + path.basename(file.path) + '.json');
    }))
    .pipe(pug())
    .on('error', function (err) {
      process.stderr.write(err.message + '\n');
      this.emit('end');
    })
    .pipe(gulp.dest(paths.public));
});

gulp.task('rebuild', ['pug'], function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['sass', 'pug', 'js', 'assets'], function () {
  browserSync({
    server: {
      baseDir: paths.public
    },
    notify: false
  });
});

gulp.task('sass', function () {
  return gulp.src(paths.sass + '*.scss')
    .pipe(sass({
      includePaths: [paths.sass],
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', function() {
  return gulp
    .src('./src/js/*.js')
    .pipe(gulp.dest(paths.js))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('assets', function() {
  return gulp
    .src('./src/assets/images/*')
    .pipe(gulp.dest(paths.assets))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', function () {
  gulp.watch(paths.sass + '**/*.scss', ['sass']);
  gulp.watch('./src/**/*.pug', ['rebuild']);
  gulp.watch("./src/js/*.js", ['js']);
  gulp.watch("./src/assets/images/*", ['assets']);
});

gulp.task('build', ['sass', 'pug']);

gulp.task('default', ['browser-sync', 'watch']);