const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');

// Работаем со стилями
const vendorsStyles = [
  'dev/styles/styles.sass',
];

module.exports = function styles(cb) {
  return vendorsStyles.length
    ? gulp.src(vendorsStyles)
      .pipe(plumber())
      .pipe(gulpif(!argv.prod, sourcemaps.init()))
      .pipe(sass())
      .pipe(autoprefixer({
        overrideBrowserslist:  [ "last 4 version" ],
        cascade: false
      }))
      .pipe(gulpif(argv.prod, cleanCSS({
        debug: true,
        compatibility: '*'
      }, details =>  {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
      })))
      .pipe(gulpif(!argv.prod, sourcemaps.write()))
      .pipe(gulp.dest('dist/css'))
    : cb();
};

module.exports = function styles() {
  return gulp.src(vendorsStyles)
    .pipe(plumber())
    .pipe(gulpif(!argv.prod, sourcemaps.init()))
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist:  [ "last 4 version" ],
      cascade: false
    }))
    .pipe(gulpif(argv.prod, cleanCSS({
      debug: true,
      compatibility: '*'
    }, details =>  {
     console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    })))
    .pipe(gulpif(!argv.prod, sourcemaps.write()))
    .pipe(gulp.dest('dist/css'));
};
