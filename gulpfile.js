// Grab our gulp packages
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    bower = require('gulp-bower'),
    babel = require('gulp-babel');

// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
    return gulp
        .src('src/styles/**/*.scss')
        .pipe(
            plumber(function(error) {
                gutil.log(gutil.colors.red(error.message));
                this.emit('end');
            })
        )
        .pipe(sourcemaps.init()) // Start Sourcemaps
        .pipe(sass())
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            })
        )
        .pipe(gulp.dest('dist/styles/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.')) // Creates sourcemaps for minified styles
        .pipe(gulp.dest('dist/styles/'));
});

// JSHint, concat, and minify JavaScript
gulp.task('scripts', function() {
    return gulp
        .src([
            // Grab your custom scripts
            'src/scripts/**/*.js'
        ])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.')) // Creates sourcemap for minified JS
        .pipe(gulp.dest('dist/scripts'));
});

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('src/styles/**/*.scss', ['styles']);
    // Watch site-js files
    gulp.watch('src/scripts/**/*.js', ['scripts']);
});

// Run fed-styles, site-js and foundation-js
gulp.task('default', function() {
    gulp.start('styles', 'scripts');
});
