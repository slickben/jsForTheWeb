const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');

gulp.task('processHTML', () => {
    gulp.src('*.html')
        .pipe(gulp.dest('dist'));
});


gulp.task('processJS', () => {
    gulp.src('scripts.js')
        .pipe(jshint({
            esversion: 6
        }))
        .pipe(jshint.reporter('default'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('babelPolyfill', () => {
    gulp.src('node_modules/babel-polyfill/browser.js')
        .pipe(gulp.dest('dist/node_modules/babel-polyfill'));
});