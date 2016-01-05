var gulp        = require('gulp');
var babel       = require('gulp-babel');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', ['js'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/src/js/*.js", ['js']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/css/*.css").on('change', browserSync.reload);
});



gulp.task('js', function() {
    return gulp.src('app/src/js/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.stream());
});