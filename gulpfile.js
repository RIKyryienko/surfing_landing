const   gulp        = require('gulp'),
        sass        = require('gulp-sass'),
        pug         = require('gulp-pug'),
        browserSync = require('browser-sync');


gulp.task('sass', function() {
    const header = gulp.src("app/blocks/header/header-sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("app/blocks/header/header-css"));
    return sass(header)
});

gulp.task('pug', function () {
    gulp.src("app/index-pug/*.pug")
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("app/"));
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app/'
        },
        notify: false
    });
});

gulp.task('watch', ['sass', 'pug', 'browserSync'], function () {
    gulp.watch("app/blocks/header/header-sass/*.sass");
    gulp.watch("app/index-pug/*.pug");
});

