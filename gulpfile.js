var gulp = require('gulp');
var html = require('gulp-htmlmin');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');


//sass
gulp.task('sass', function(){
	return gulp.src('./src/scss/style.scss')
	  .pipe(sass({outputStyle: 'expanded'}))
	  .on("error", notify.onError("Error: <%= error.message %>"))
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream())
});

// INDEX
gulp.task('index', function(){
	return gulp.src('./src/index.html')
	  .pipe(html({collapseWhitespace:true}))
	  .on("error", notify.onError("Error: <%= error.message %>"))
	  .pipe(gulp.dest('./dist'))
	  .pipe(browserSync.stream())
});


// js
gulp.task('compress', function(){
	return gulp.src('./src/js/main.js')
	.pipe(uglify())
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/js/'))
	.pipe(browserSync.stream())
})


// Browser-Sync
gulp.task('BS', ['index', 'sass', 'compress'], function(){
	browserSync.init({
		server:{
			baseDir: './dist/'
		}
	})
	gulp.watch('./src/index.html', ['index']);
	gulp.watch('./src/scss/style.scss', ['sass']);
	gulp.watch('./src/js/main.js', ['compress']);
});

// Default
gulp.task('default', ["BS"]);