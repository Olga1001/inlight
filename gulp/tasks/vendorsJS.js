const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  'dev/js/vendor/swiper-bundle.min.js',
  'dev/js/vendor/scrolloverflow.min.js',
  'dev/js/vendor/fullpage.min.js'
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('dist/js/'))
    : cb();
};
