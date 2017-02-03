const gulp             = require('gulp');
const clean            = require('gulp-clean');
const eventStream      = require('event-stream');
const browserSync      = require('browser-sync');
const config           = require('../package').gulp;

const cleanSounds = () => {
  return gulp.src(config.dest.sounds, { read: false })
    .pipe(clean());
};

const copySounds = () => {
  return gulp.src(`${config.src.sounds}${config.selectors.sounds}`)
    .pipe(gulp.dest(config.dest.sounds));
};

const buildSounds = () => {
  return eventStream.merge(
    cleanSounds(),
    copySounds()
  )
  .pipe(browserSync.stream());
};

gulp.task('build-sounds', buildSounds);
module.exports = buildSounds;
