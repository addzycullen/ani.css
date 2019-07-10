// GULP PACKAGES
// Most packages are lazy loaded
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    touch = require('gulp-touch-cmd'),
    plugin = require('gulp-load-plugins')();

// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
    return gulp
        .src('src/styles/**/*.scss')
        .pipe(
            plugin.plumber(function(error) {
                gutil.log(gutil.colors.red(error.message));
                this.emit('end');
            })
        )
        .pipe(plugin.sourcemaps.init())
        .pipe(plugin.sass())
        .pipe(
            plugin.autoprefixer({
                browsers: ['last 2 versions', 'ie >= 9', 'ios >= 7'],
                cascade: false
            })
        )
        .pipe(plugin.cssnano({ safe: true, minifyFontValues: { removeQuotes: false } }))
        .pipe(plugin.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/styles/'))
        .pipe(touch());
});

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('src/styles/**/*.scss', gulp.parallel('styles'));
});

// Run styles, scripts and foundation-js
gulp.task('default', gulp.parallel('styles'));
