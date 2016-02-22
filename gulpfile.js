var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssUrlAdjuster = require('gulp-css-url-adjuster');
var cssImageDimensions = require('gulp-css-image-dimensions');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp
    .src('./assets/stylesheets/**/*.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(cssUrlAdjuster({
      prepend: '/images/'
    }))
    .pipe(cssImageDimensions('../images'))
    .pipe(autoprefixer())
    .pipe(rename(function (path) {
      path.extname = '';
    }))
    .pipe(gulp.dest('./.tmp/dist/stylesheets'));
});

gulp.task('images', function () {
  return gulp
    .src('./assets/images/**/*')
    .pipe(gulp.dest('./.tmp/dist/images'))
});

gulp.task('watch', function () {
  return gulp
    .watch('./assets/**/*', ['default'])
    .on('change', function (event) {
       console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['sass', 'images']);
