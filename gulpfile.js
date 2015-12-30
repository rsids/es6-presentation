var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/**").on('change', browserSync.reload);
});

gulp.task('js', function() {
    return gulp.src('app/src/js/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/js'));
});