const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

// Create CSS files
function buildStyles () {
  return  src('*.scss')   // relative path to source of sass file
          .pipe(sass())       // use the sass function defined up
          .pipe(dest('css'))  // output the css file
}

// Watch Sass files and recompile CSS after any change
function watchTask() {
  watch(['*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask);