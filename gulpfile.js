var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var tsify = require('tsify');
var del = require('del');
var gutil = require('gulp-util');
var webserver = require('gulp-webserver');

var paths = { pages: [ 'src/*.html', 'src/*.json', 'src/*.css' ], dirs: [ "src/organization/**", "src/web-messaging/**", "src/features/**" ]};
var outfiles = { pages: [ 'dist/index.html', 'dist/config-nav.json', 'dist/spokhub.css', 'dist/spokhub.js', 'dist/organization/**', 'dist/web-messaging/**' ]};
var APP_NAME = 'spokhub.js';

var orchestrator_relative_location = '../../ccp-orchestrator/docker/proxy_public/';

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
	console.log('runall called');
	gulp.src(paths.pages).pipe(gulp.dest('dist'));
	return bundleAll();
}

gulp.task('copy-html', function() {
	var combo = paths.pages.concat(paths.dirs);
	return gulp.src(combo, {base:"./src"}).pipe(gulp.dest('dist'));
});

gulp.task('orchestrate', function() {
	return gulp.src(outfiles.pages, {base:"./dist"}).pipe(gulp.dest(orchestrator_relative_location));
});

gulp.task('build', function() {
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

/* broke */
gulp.task('serve', function(){
	gulp.src('dist').pipe(webserver({
		directoryListing: true,
		open: true
	}));
});