const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  'dev/js/vendor/slick.min.js',
  // 'dev/js/vendor/jquery.pagepiling.min.js',
  'dev/js/vendor/wow.min.js',
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('dist/js/'))
    : cb();
};
