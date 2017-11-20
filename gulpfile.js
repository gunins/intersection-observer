const gulp = require('gulp');
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');

gulp.task('rollup', () => rollup({
    input:  './src/IO.js',
    format: 'umd',
    name:'IO'
}).pipe(source('IO.js'))
    .pipe(gulp.dest('./dist')));