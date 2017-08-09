var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var tsify = require('tsify');
var del = require('del');
var gutil = require('gulp-util');
var paths = { pages: [ 'src/*.html', 'src/*.json', 'src/*.css' ]};
var APP_NAME = 'spokhub.js';

var watcher = watchify(browserify({
		basedir: '.',
		debug: true,
		entries: ['src/main.ts'],
		cache: {},
		packageCache: {}
	})).plugin(tsify);

function bundleAll() {
	return watcher
		.bundle()
		.pipe(source(APP_NAME))
		.pipe(gulp.dest('dist'));
}

function runAll() {
	gulp.src(paths.pages).pipe(gulp.dest('dist'));
	return bundleAll();
}

gulp.task('copy-html', function() {
	return gulp.src(paths.pages).pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy-html'], function() {
	return browserify({
		basedir: '.',
		debug: true,
		entries: ['src/main.ts'],
		cache: {},
		packageCache: {}
	})
	.plugin(tsify)
	.bundle()
	.pipe(source(APP_NAME))
	.pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
	return del(['./dist/**']);
});

gulp.task('watch', ['copy-html'], bundleAll);
watcher.on('update', runAll);
watcher.on('log', gutil.log);