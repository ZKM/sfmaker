var   gulp = require('gulp'),
   connect = require('gulp-connect'),
      sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
 minifyCSS = require('gulp-minify-css');

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function () {
    gulp.src('./css/*.scss')
        .pipe(sass())
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch(['./*.css'], ['css']),
  gulp.watch(['./*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);