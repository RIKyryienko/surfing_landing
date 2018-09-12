const   gulp        = require('gulp'),
        sass        = require('gulp-sass'),
        pug         = require('gulp-pug'),
        browserSync = require('browser-sync');


gulp.task('sass', function() {
    const header_sass = gulp.src('app/blocks/header/header-sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/blocks/header/header-css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('pug', function () {

    gulp.src('app/index-pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app/'
        },
        notify: false
    });
});

gulp.task('watch', ['browserSync', 'pug', 'sass'], function () {
    gulp.watch('app/blocks/header/header-sass/*.sass', ['sass']);
    gulp.watch('app/index-pug/*.pug', ['pug']);
});

